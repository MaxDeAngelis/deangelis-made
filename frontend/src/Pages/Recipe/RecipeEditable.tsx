import Image from '../../Components/Image';
import RecipeProps from '../../../types/recipe.types';
import { Step, Ingredient, Label } from './Recipe.style';

function RecipeEditable({ recipe }: { recipe: RecipeProps }): JSX.Element {
  const { name, image, author, description, ingredients, steps } = recipe;
  return (
    <>
      <h2>{name}</h2>
      <h4>{`Created by: ${author}`}</h4>
      <Image src={image} />
      <div>
        <Label htmlFor='description'>
          Description
          <textarea name='description' value={description} />
        </Label>
      </div>
      <Label>
        Ingredients
        <ul>
          {ingredients?.map((ing) => (
            <li>
              <Ingredient type='text' value={ing.text} />
            </li>
          ))}
        </ul>
      </Label>
      <Label>
        Steps
        <ol>
          {steps?.map((step) => (
            <li>
              <Step value={step.text} />
            </li>
          ))}
        </ol>
      </Label>
    </>
  );
}
export default RecipeEditable;
