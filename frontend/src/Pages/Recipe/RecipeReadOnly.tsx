import Image from '../../Components/Image';
import RecipeProps from '../../types/recipe.types';
import Label from '../../Components/Label';

function RecipeReadOnly({ recipe }: { recipe: RecipeProps }): JSX.Element {
  const { name, image, author, description, ingredients, steps } = recipe;
  return (
    <>
      <h2>{name}</h2>
      <h4>{`Created by: ${author}`}</h4>
      <Image src={image} readonly />
      <div>
        <Label htmlFor='description'>
          Description
          <p>{description}</p>
        </Label>
      </div>
      <Label>
        Ingredients
        <ul>
          {ingredients?.map(({ _id, text }) => (
            <li key={_id}>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </Label>
      <Label>
        Steps
        <ol>
          {steps?.map(({ _id, text }) => (
            <li key={_id}>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      </Label>
    </>
  );
}
export default RecipeReadOnly;
