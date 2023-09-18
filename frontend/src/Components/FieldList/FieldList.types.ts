import RecipeProps, { RecipeListItemProps } from '../../types/recipe.types';

interface FieldListProps extends FieldListPropsReadOnly {
  variant: 'single' | 'multi';
  propName: keyof RecipeProps;
  onChange: (propName: keyof RecipeProps, value: any) => void;
}

export interface FieldListPropsReadOnly {
  label: string;
  ordered?: boolean;
  list: RecipeListItemProps[];
}

export default FieldListProps;
