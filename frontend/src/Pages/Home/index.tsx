import Recents from '../../Components/RecipeList/RecipeList';

import recipes from './FakeRecents.json';
import favorites from './FakeFavorites.json';

function Home(): JSX.Element {
  return (
    <>
      <Recents heading='Recent recipes' recipes={recipes} />
      <Recents heading='Favorite recipes' recipes={favorites} />
    </>
  );
}
export default Home;
