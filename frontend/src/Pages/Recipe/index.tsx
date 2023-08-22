import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import RecipeProps from '../../../types/recipe.types';
import RecipeEditable from './RecipeEditable';
import RecipeReadOnly from './RecipeReadOnly';

function Recipe(): JSX.Element {
  const [previousRecipe, setPreviousRecipe] = useState<RecipeProps>();
  const [recipe, setRecipe] = useState<RecipeProps>();
  const [editable, setEditable] = useState<Boolean>(false);

  const params = useParams();

  useEffect(() => {
    fetch(`/api/recipe?id=${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        if (params.id === 'create') setEditable(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const save = (data: RecipeProps) => {
    fetch('/api/save', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (!res.ok) {
        // eslint-disable-next-line no-alert
        // alert('Recipe save failed');
        // eslint-disable-next-line no-console
        console.log('Response', res);
        setRecipe(previousRecipe);
      }
    });
  };

  if (!recipe) return <span>Loading...</span>;

  return (
    <>
      <button
        type='button'
        onClick={() => {
          if (editable) {
            save(recipe);
          } else {
            setPreviousRecipe(recipe);
          }
          setEditable(!editable);
        }}
      >
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
