import Recents from '../../Components/RecipeList/RecipeList';

import recipes from './FakeRecents.json';
import favorites from './FakeFavorites.json';

function Home(): JSX.Element {
  return (
    <p>
      <Recents heading='Recent recipes' recipes={recipes} />
      <Recents heading='Favorite recipes' recipes={favorites} />
    </p>
  );
}
export default Home;
