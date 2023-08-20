import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import RecipeProps from '../../../types/recipe.types';
import RecipeEditable from './RecipeEditable';
import RecipeReadOnly from './RecipeReadOnly';

function Recipe(): JSX.Element {
  const [recipe, setRecipe] = useState<RecipeProps>();
  const [editable, setEditable] = useState<Boolean>(false);

  const params = useParams();

  useEffect(() => {
    fetch(`/api/recipe?id=${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (!recipe) return <span>Loading...</span>;

  return (
    <>
      <button type='button' onClick={() => setEditable(!editable)}>
        {editable ? 'Save' : 'Edit'}
      </button>
      {editable ? (
        <RecipeEditable
          recipe={recipe}
          onChange={(propName, value) => {
            const updatedValus: RecipeProps = {
              ...recipe,
            };

            updatedValus[propName] = value;
            console.log(updatedValus);

            setRecipe(updatedValus);
          }}
        />
      ) : (
        <RecipeReadOnly recipe={recipe} />
      )}
    </>
  );
}
export default Recipe;
