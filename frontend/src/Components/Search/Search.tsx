import { Container, Input, Img } from './Search.styles';
import Magnify from './Magnify.svg';

function Search({
  onSearch,
}: {
  onSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}): JSX.Element {
  return (
    <Container>
      <Input type='text' onKeyUp={onSearch} />
      <Img src={Magnify} />
    </Container>
  );
}
export default Search;
