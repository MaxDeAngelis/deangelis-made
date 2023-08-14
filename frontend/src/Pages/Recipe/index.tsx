import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Recipe(): JSX.Element {
  const params = useParams();

  useEffect(() => {
    fetch(`/api/recipe?id=${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return <p>This a Recipe {params.id}</p>;
}
export default Recipe;
