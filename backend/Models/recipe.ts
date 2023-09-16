import { Schema, model } from 'mongoose';

interface ItemProps {
  text: string;
  heading?: boolean;
}

interface TimeProps {
  amount: number;
  unit: 'mins' | 'hours' | 'days';
}

interface RecipeProps {
  name: string;
  description: string;
  author: string;
  image: string;
  url: string;
  prepTime: TimeProps;
  cookTime: TimeProps;
  servings: Number;
  steps: ItemProps[];
  ingredients: ItemProps[];
}

const Items = new Schema<ItemProps>({
  text: { type: String, default: '', required: true },
  heading: { type: Boolean, default: false, required: false },
});

const Time = new Schema<TimeProps>({
  amount: { type: Number, default: 0, required: true },
  unit: { type: String, default: 'mins', required: true },
});

const recipeSchema = new Schema<RecipeProps>(
  {
    name: { type: String, default: '', required: true },
    description: { type: String, default: '', required: true },
    author: { type: String, default: '', required: true },
    image: { type: String, default: '' },
    url: { type: String, default: '' },
    prepTime: {
      type: Time,
      default: {},
      required: true,
    },
    cookTime: {
      type: Time,
      default: {},
      required: true,
    },
    servings: { type: Number, default: 1, required: true },
    steps: { type: [Items], default: [{ text: '' }] },
    ingredients: { type: [Items], default: [{ text: '' }] },
  },
  {
    timestamps: true,
  },
);

export default model('Recipe', recipeSchema);
