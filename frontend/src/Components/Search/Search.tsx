import { Container, Input, Img } from './Search.styles';
import Magnify from './Magnify.svg';

function Search(): JSX.Element {
  return (
    <Container>
      <Input type='text' />
      <Img src={Magnify} />
    </Container>
  );
}
export default Search;
