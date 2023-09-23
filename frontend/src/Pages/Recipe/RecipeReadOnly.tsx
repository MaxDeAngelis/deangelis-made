import Image from '../../Components/Image';
import RecipeProps from '../../types/recipe.types';
import Label from '../../Components/Label';
import Time from '../../Components/Time';
import FieldListReadOnly from '../../Components/FieldList/FieldListReadOnly';

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
      <Label htmlFor='description'>
        Description
        <p>{description}</p>
      </Label>
      <FieldListReadOnly label='Ingredients' list={ingredients} />
      <FieldListReadOnly label='Steps' list={steps} ordered />
    </>
  );
}
export default RecipeReadOnly;
