import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Image from '../../Components/Image';
import RecipeProps from '../../types/recipe.types';

function Recipe(): JSX.Element {
  const [recipe, setRecipe] = useState<RecipeProps>();

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
  if (recipe === null) return <span>Loading...</span>;
  return (
    <>
      <h2>{recipe?.name}</h2>
      <h4>{`Created by: ${recipe?.author}`}</h4>
      <Image />
      <h3>Ingredients</h3>
      <ul>{recipe?.ingredients?.map((ing) => <li>{ing.text}</li>)}</ul>
      <h3>Steps</h3>
      <ol>{recipe?.steps?.map((step) => <li>{step.text}</li>)}</ol>
    </>
  );
}
export default Recipe;
