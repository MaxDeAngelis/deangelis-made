import Image from '../../Components/Image';
import RecipeEditableProps from './RecipeEditable.types';
import { Step, Ingredient, Label } from './Recipe.style';

function RecipeEditable({
  recipe,
  onChange,
}: RecipeEditableProps): JSX.Element {
  const { name, image, author, description, ingredients, steps } = recipe;
  return (
    <>
      <input
        type='text'
        value={name}
        onChange={(e) => onChange('name', e.target.value)}
      />
      <h4>{`Created by: ${author}`}</h4>
      <Image src={image} />
      <div>
        <Label htmlFor='description'>
          Description
          <textarea
            name='description'
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              onChange('description', e.target.value)
            }
            value={description}
          />
        </Label>
      </div>
      <Label>
        Ingredients
        <ul>
          {ingredients?.map(({ _id: ingId, text: ingText }) => (
            <li key={ingId}>
              <Ingredient
                type='text'
                value={ingText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onChange(
                    'ingredients',
                    ingredients.map(({ _id: storedId, text: storedText }) => ({
                      _id: storedId,
                      text: storedId === ingId ? e.target.value : storedText,
                    })),
                  );
                }}
              />
            </li>
          ))}
        </ul>
        <button
          type='button'
          onClick={() =>
            onChange('ingredients', [...ingredients, { text: '' }])
          }
        >
          Add
        </button>
      </Label>
      <Label>
        Steps
        <ol>
          {steps?.map(({ _id, text }) => (
            <li key={_id}>
              <Step value={text} />
            </li>
          ))}
        </ol>
      </Label>
    </>
  );
}
export default RecipeEditable;
