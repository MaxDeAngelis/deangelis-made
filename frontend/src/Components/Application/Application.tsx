import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useSessionStorage } from 'usehooks-ts';

import Header from '../Header';
import { Search, Home, Recipe } from '../../Pages';
import Loader from '../Loader';
import Context, { ContextProps } from '../Context';
import RecipeProps from '../../types/recipe.types';
import { ActionProps } from '../Header/Header.types';
import { User } from './Application.types';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function Application(): JSX.Element {
  const [user, setUser] = useSessionStorage<User | undefined>(
    'user',
    undefined,
  );
  const [currentRecipe, setCurrentRecipe] = useState<RecipeProps | null>(null);
  const [previousRecipe, setPreviousRecipe] = useState<RecipeProps | null>(
    null,
  );
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (!user) return;
    fetch(`/api/session`)
      .then((res) => {
        // If the user session expired on the server reset client
        if (res.status === 401) {
          setUser(undefined);
          return null;
        }
        return res.json();
      })
      .then((data: User | undefined) => {
        // If somehow the client session does not match server reset
        if (data?.name !== user?.name) setUser(undefined);
      })
      .catch((e) => console.error('Unable to validate session', e));
  }, []);

  const save = (data: RecipeProps) => {
    fetch('/api/save', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          // eslint-disable-next-line no-console
          console.error('Save Failed:', res);
          setCurrentRecipe(previousRecipe);
          return null;
        }
        return res.json();
      })
      .then((updatedRecipe) => {
        if (updatedRecipe) {
          setCurrentRecipe(updatedRecipe);
          setEditable(false);
        }
      });
  };

  const actions = useMemo(() => {
    const availableActions: Array<ActionProps> = [];
    if (!user) return availableActions;
    if (!editable) {
      availableActions.push({
        id: 'add',
        name: 'Add a Recipe',
        onAction: () => window.location.assign('/recipe/create'),
      });
    }
    if (editable && currentRecipe) {
      availableActions.push({
        id: 'discard',
        name: 'Discard changes',
        onAction: () => {
          setCurrentRecipe(previousRecipe);
          setEditable(false);
        },
      });
      availableActions.push({
        id: 'save',
        name: 'Save changes',
        onAction: () => currentRecipe && save(currentRecipe),
      });
    } else if (currentRecipe) {
      availableActions.push({
        id: 'edit',
        name: 'Edit Recipe',
        onAction: () => {
          setEditable(true);
          setPreviousRecipe(currentRecipe);
        },
      });
    }

    return availableActions;
  }, [user, editable, currentRecipe]);

  const contextValue = useMemo<ContextProps>(
    () => ({
      currentRecipe,
      previousRecipe,
      editable,
      setCurrentRecipe,
      setPreviousRecipe,
      setEditable,
    }),
    [currentRecipe, previousRecipe, editable],
  );
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Context.Provider value={contextValue}>
        <Header
          actions={actions}
          user={user}
          onSearch={(e: React.KeyboardEvent) => {
            if (e.key === 'Enter') {
              const target = e.target as HTMLInputElement;
              window.location.assign(`/search?q=${target.value}`);
            }
          }}
          onLogin={(credentialResponse) => {
            fetch('/api/login', {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                user: credentialResponse.credential,
              }),
            })
              .then((res) => res.json())
              .then((response) => {
                if (response) {
                  setUser({
                    name: response.name,
                    picture: response.picture,
                  });
                  console.log('Internal login:', response);
                }
              });
          }}
        />
        <main>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='recipe' element={<Loader />}>
                <Route path=':id' element={<Recipe />} />
              </Route>
              <Route path='search' element={<Search />} />
            </Routes>
          </BrowserRouter>
        </main>
      </Context.Provider>
    </GoogleOAuthProvider>
  );
}

export default Application;
