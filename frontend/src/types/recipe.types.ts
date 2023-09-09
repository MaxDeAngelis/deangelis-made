export interface RecipeListItemProps {
  _id: string;
  text: string;
  heading?: boolean;
}

export interface RecipeTimeProps {
  type: 'prep' | 'cook';
  amount: number;
  unit: 'mins' | 'hours' | 'days';
}

interface RecipeProps {
  name: string;
  description: string;
  author: string;
  image: string;
  url: string;
  prepTime: RecipeTimeProps;
  cookTime: RecipeTimeProps;
  servings: Number;
  steps: RecipeListItemProps[];
  ingredients: RecipeListItemProps[];
}

export default RecipeProps;
