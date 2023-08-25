import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import RecipeProps from '../../../types/recipe.types';
import RecipeEditable from './RecipeEditable';
import RecipeReadOnly from './RecipeReadOnly';
import Context from '../../Components/Context';

function Recipe(): JSX.Element {
  const { currentRecipe, editable, setCurrentRecipe, setEditable } =
    useContext(Context);

  const params = useParams();

  useEffect(() => {
    if (params.id === 'create') setEditable(true);

    fetch(`/api/recipe?id=${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentRecipe(data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch recipe:', err.message);
      });
  }, []);

  if (!currentRecipe) return <span>Loading...</span>;

  return editable ? (
    <RecipeEditable
      recipe={currentRecipe}
      onChange={(propName, value) => {
        const updatedValus: RecipeProps = {
          ...currentRecipe,
        };
        updatedValus[propName] = value;
        setCurrentRecipe(updatedValus);
      }}
    />
  ) : (
    <RecipeReadOnly recipe={currentRecipe} />
  );
}
export default Recipe;
