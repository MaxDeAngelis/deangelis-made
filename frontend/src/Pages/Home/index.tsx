import { useEffect, useState } from 'react';

import Recents from '../../Components/RecipeList/RecipeList';

function Home(): JSX.Element {
  const [recents, setRecents] = useState([]);
  useEffect(() => {
    fetch(`/api/recents`)
      .then((res) => res.json())
      .then((data) => {
        setRecents(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return <Recents heading='Recent recipes' recipes={recents} />;
}
export default Home;
