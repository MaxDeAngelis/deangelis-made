import { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../Header';
import { Search, Home, RecipeLoader, Recipe } from '../../Pages';
import Context, { ContextProps } from '../Context';
import RecipeProps from '../../../types/recipe.types';

function Application(): JSX.Element {
  const [currentRecipe, setCurrentRecipe] = useState<RecipeProps | null>(null);
  const [previousRecipe, setPreviousRecipe] = useState<RecipeProps | null>(
    null,
  );
  const [editable, setEditable] = useState(false);

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
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='recipe' element={<RecipeLoader />}>
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
