import { Schema, model } from 'mongoose';

interface Item {
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

const Items = new Schema<Item>({
  text: { type: String, default: '', required: true },
  heading: { type: Boolean, default: false, required: false },
});

const recipeSchema = new Schema<RecipeProps>(
  {
    name: { type: String, default: '', required: true },
    description: { type: String, default: '', required: true },
    author: { type: String, default: '', required: true },
    image: { type: String, default: '' },
    url: { type: String, default: '' },
    prepTime: { type: String, default: '0:00', required: true },
    cookTime: { type: String, default: '0:00', required: true },
    servings: { type: Number, default: 1, required: true },
    steps: { type: [Items], default: [{ text: '' }] },
    ingredients: { type: [Items], default: [{ text: '' }] },
  },
  {
    timestamps: true,
  },
);

export default model('Recipe', recipeSchema);
