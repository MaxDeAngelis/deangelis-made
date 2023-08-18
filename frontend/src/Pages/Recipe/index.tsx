import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Image from '../../Components/Image';
import RecipeProps from '../../../types/recipe.types';
import { Description, Step, Ingredient, Label } from './Recipe.style';

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
      <Image src={recipe?.image} />
      <Description>
        <Label htmlFor='description'>
          Description
          <textarea name='description' value={recipe?.description} />
        </Label>
      </Description>
      <Label>
        Ingredients
        <ul>
          {recipe?.ingredients?.map((ing) => (
            <li>
              <Ingredient type='text' value={ing.text} />
            </li>
          ))}
        </ul>
      </Label>
      <Label>
        Steps
        <ol>
          {recipe?.steps?.map((step) => (
            <li>
              <Step value={step.text} />
            </li>
          ))}
        </ol>
      </Label>
    </>
  );
}
export default Recipe;
