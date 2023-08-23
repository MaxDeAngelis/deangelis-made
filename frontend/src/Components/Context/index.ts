import { createContext } from 'react';
import RecipeProps from '../../../types/recipe.types';

export interface ContextProps {
  currentRecipe: RecipeProps | null;
  previousRecipe: RecipeProps | null;
  editable: boolean;
  setCurrentRecipe: (recipe: RecipeProps | null) => void;
  setPreviousRecipe: (recipe: RecipeProps | null) => void;
  setEditable: (editable: boolean) => void;
}

export default createContext<ContextProps>({
  currentRecipe: null,
  previousRecipe: null,
  editable: false,
  setCurrentRecipe: () => {},
  setPreviousRecipe: () => {},
  setEditable: () => {},
});
