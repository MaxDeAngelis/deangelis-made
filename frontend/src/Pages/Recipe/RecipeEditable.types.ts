import RecipeProps from '../../types/recipe.types';

type RecipeEditableProps = {
  recipe: RecipeProps;
  onChange: (propName: keyof RecipeProps, value: any) => void;
};

export default RecipeEditableProps;
