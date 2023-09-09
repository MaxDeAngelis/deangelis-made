import Image from '../../Components/Image';
import RecipeProps from '../../types/recipe.types';
import Label from '../../Components/Label';
import Time from '../../Components/Time';

function RecipeReadOnly({ recipe }: { recipe: RecipeProps }): JSX.Element {
  const {
    name,
    image,
    author,
    prepTime,
    cookTime,
    description,
    ingredients,
    steps,
  } = recipe;
  return (
    <>
      <h2>{name}</h2>
      <h4>{`Created by: ${author}`}</h4>
      <Time
        label='Prep time'
        amount={prepTime.amount}
        unit={prepTime.unit}
        readonly
        propName='prepTime'
        onChange={() => {}}
      />
      <Time
        label='Cook time'
        amount={cookTime.amount}
        unit={cookTime.unit}
        readonly
        propName='cookTime'
        onChange={() => {}}
      />
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
