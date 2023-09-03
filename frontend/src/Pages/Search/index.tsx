import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import RecipeProps from '../../types/recipe.types';
import { RecipeSummary } from '../../Components/RecipeList/RecipeList.types';
import RecipeList from '../../Components/RecipeList';
import SearchInput from '../../Components/Search';

function Search(): JSX.Element {
  const [results, setResults] = useState<RecipeProps | []>([]);
  const [searchParams] = useSearchParams();

  const search = (queryString: string) => {
    fetch(`/api/search?q=${queryString}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch recipe:', err.message);
      });
  };

  useEffect(() => search(searchParams.get('q') as string), []);

  if (!results) return <span>Loading...</span>;

  return (
    <>
      <SearchInput
        onSearch={(e) => {
          const target = e.target as HTMLInputElement;
          search(target.value);
        }}
      />
      <RecipeList
        heading='Search results'
        recipes={results as RecipeSummary[]}
      />
    </>
  );
}
export default Search;
