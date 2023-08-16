interface Item {
  text: String;
  heading?: Boolean;
}

interface RecipeProps {
  name: String;
  description: String;
  author: String;
  image: String;
  url: String;
  prepTime: String;
  cookTime: String;
  servings: Number;
  steps: Item[];
  ingredients: Item[];
}

export default RecipeProps;
