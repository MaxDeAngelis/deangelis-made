import RecipeProps from '../../types/recipe.types';

type ImageProps = {
  src?: string;
  readonly?: boolean;
  onChange?: (propName: keyof RecipeProps, value: any) => void;
};

export default ImageProps;
