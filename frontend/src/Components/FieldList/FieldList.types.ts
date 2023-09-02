import RecipeProps, { RecipeListItemProps } from '../../types/recipe.types';

type RecipeListProps = {
  heading: string;
  variant: 'single' | 'multi';
  ordered?: boolean;
  list: RecipeListItemProps[];
  propName: keyof RecipeProps;
  onChange: (propName: keyof RecipeProps, value: any) => void;
};

export default RecipeListProps;
