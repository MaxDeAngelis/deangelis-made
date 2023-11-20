import RecipeProps, { RecipeListItemProps } from '../../types/recipe.types';

export type SubGroup = {
  text?: string;
  originalIndex: number;
  items: { text: string; originalIndex: number }[];
};

export interface FieldListPropsReadOnly {
  label: string;
  ordered?: boolean;
  list: RecipeListItemProps[];
}

export default interface FieldListProps extends FieldListPropsReadOnly {
  variant: 'single' | 'multi';
  propName: keyof RecipeProps;
  onChange: (propName: keyof RecipeProps, value: any) => void;
}
