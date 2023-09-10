import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import RecipeProps from '../../types/recipe.types';
import { RecipeSummary } from '../../Components/RecipeList/RecipeList.types';
import RecipeList from '../../Components/RecipeList';
import SearchInput from '../../Components/Search';
import { SearchLabel } from './SearchPage.styles';

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
      <SearchLabel htmlFor='search'>
        <h5>Search for</h5>
        <SearchInput
          onSearch={(e) => {
            const target = e.target as HTMLInputElement;
            search(target.value);
          }}
        />
      </SearchLabel>
      <RecipeList recipes={results as RecipeSummary[]} />
    </>
  );
}
export default Search;
