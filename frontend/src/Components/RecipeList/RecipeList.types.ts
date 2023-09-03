export type RecipeSummary = {
  id: number;
  image: string;
  name: string;
  url: string;
  description: string;
  author: string;
};

type RecipeListProps = {
  heading: string;
  recipes: RecipeSummary[];
};

export default RecipeListProps;
