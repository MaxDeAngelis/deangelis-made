import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import RecipeProps from '../../../types/recipe.types';
import RecipeEditable from './RecipeEditable';
import RecipeReadOnly from './RecipeReadOnly';
import Context from '../../Components/Context';

function Recipe(): JSX.Element {
  const {
    currentRecipe,
    previousRecipe,
    editable,
    setCurrentRecipe,
    setPreviousRecipe,
    setEditable,
  } = useContext(Context);

  const params = useParams();

  useEffect(() => {
    fetch(`/api/recipe?id=${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentRecipe(data);
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
    })
      .then((res) => {
        if (!res.ok) {
          // eslint-disable-next-line no-console
          console.log('Response', res);
          setCurrentRecipe(previousRecipe);
          return null;
        }
        return res.json();
      })
      .then((updatedRecipe) => {
        if (updatedRecipe) {
          setCurrentRecipe(updatedRecipe);
        }
      });
  };

  if (!currentRecipe) return <span>Loading...</span>;

  return (
    <>
      <button
        type='button'
        onClick={() => {
          if (editable) {
            save(currentRecipe);
          } else {
            setPreviousRecipe(currentRecipe);
          }
          setEditable(!editable);
        }}
      >
        {editable ? 'Save' : 'Edit'}
      </button>
      {editable ? (
        <RecipeEditable
          recipe={currentRecipe}
          onChange={(propName, value) => {
            const updatedValus: RecipeProps = {
              ...currentRecipe,
            };

            updatedValus[propName] = value;
            console.log(updatedValus);

            setCurrentRecipe(updatedValus);
          }}
        />
      ) : (
        <RecipeReadOnly recipe={currentRecipe} />
      )}
    </>
  );
}
export default Recipe;
