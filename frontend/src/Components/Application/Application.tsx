import { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../Header';
import { Search, Home, Recipe } from '../../Pages';
import Loader from '../Loader';
import Context, { ContextProps } from '../Context';
import RecipeProps from '../../types/recipe.types';
import { ActionProps } from '../Header/Header.types';

function Application(): JSX.Element {
  const [currentRecipe, setCurrentRecipe] = useState<RecipeProps | null>(null);
  const [previousRecipe, setPreviousRecipe] = useState<RecipeProps | null>(
    null,
  );
  const [editable, setEditable] = useState(false);

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
    if (!editable) {
      availableActions.push({
        name: 'Add a Recipe',
        onAction: () => window.location.assign('/recipe/create'),
      });
    }
    if (editable && currentRecipe) {
      availableActions.push({
        name: 'Discard changes',
        onAction: () => {
          setCurrentRecipe(previousRecipe);
          setEditable(false);
        },
      });
      availableActions.push({
        name: 'Save changes',
        onAction: () => currentRecipe && save(currentRecipe),
      });
    } else if (currentRecipe) {
      availableActions.push({
        name: 'Edit Recipe',
        onAction: () => {
          setEditable(true);
          setPreviousRecipe(currentRecipe);
        },
      });
    }

    return availableActions;
  }, [editable, currentRecipe]);

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
    <Context.Provider value={contextValue}>
      <Header
        actions={actions}
        onSearch={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter') {
            const target = e.target as HTMLInputElement;
            window.location.assign(`/search?q=${target.value}`);
          }
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
  );
}

export default Application;
