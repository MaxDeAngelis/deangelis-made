import Image from '../../Components/Image';
import RecipeEditableProps from './RecipeEditable.types';
import Label from '../../Components/Label';
import FieldList from '../../Components/FieldList';

function RecipeEditable({
  recipe,
  onChange,
}: RecipeEditableProps): JSX.Element {
  const { name, image, author, description, ingredients, steps } = recipe;
  return (
    <>
      <Label htmlFor='name'>
        Name
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => onChange('name', e.target.value)}
        />
      </Label>

      <Label htmlFor='author'>
        Author
        <input
          type='text'
          name='author'
          value={author}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange('author', e.target.value)
          }
        />
      </Label>
      <Image src={image} onChange={onChange} />
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
      <FieldList
        heading='Ingredients'
        variant='single'
        propName='ingredients'
        list={ingredients}
        onChange={onChange}
      />
      <FieldList
        heading='Steps'
        variant='multi'
        ordered
        propName='steps'
        list={steps}
        onChange={onChange}
      />
    </>
  );
}
export default RecipeEditable;
