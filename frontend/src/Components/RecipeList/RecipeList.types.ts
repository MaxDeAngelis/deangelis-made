import RecipeProps from '../../types/recipe.types';

export interface RecipeSummary extends RecipeProps {
  id: number;
}
interface RecipeListProps {
  heading: string;
  recipes: RecipeSummary[];
}

export default RecipeListProps;
