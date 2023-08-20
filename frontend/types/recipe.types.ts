interface Item {
  _id: string;
  text: string;
  heading?: boolean;
}

interface RecipeProps {
  name: string;
  description: string;
  author: string;
  image: string;
  url: string;
  prepTime: string;
  cookTime: string;
  servings: Number;
  steps: Item[];
  ingredients: Item[];
}

export default RecipeProps;
