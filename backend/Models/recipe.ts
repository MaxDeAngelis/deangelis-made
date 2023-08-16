import { Schema, model } from 'mongoose';

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

const Items = new Schema<Item>({
  text: { type: String, required: true },
  heading: { type: Boolean, required: false },
});

const recipeSchema = new Schema<RecipeProps>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    image: {
      type: String,
      // eslint-disable-next-line no-underscore-dangle
      default: (doc) => `images/${doc._id}.png`,
    },
    url: {
      type: String,
      default: (doc) =>
        doc.name.replace(/ /g, '-').replace(/'/g, '').toLowerCase(),
    },
    prepTime: { type: String, required: true },
    cookTime: { type: String, required: true },
    servings: { type: String, required: true },
    steps: { type: [Items] },
    ingredients: { type: [Items] },
  },
  {
    timestamps: true,
  },
);

export default model('Recipe', recipeSchema);
