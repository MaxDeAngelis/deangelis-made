import { useRef } from 'react';
import { Container, CollapsableInput, Input, Img } from './Search.styles';
import Magnify from './Magnify.svg';

function Search({
  collapsable,
  onSearch,
}: {
  collapsable?: boolean;
  onSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}): JSX.Element {
  const searchRef = useRef<HTMLInputElement>(null);
  const InputComponent = collapsable ? CollapsableInput : Input;
  return (
    <Container>
      <InputComponent type='text' onKeyUp={onSearch} ref={searchRef} />
      <Img src={Magnify} onClick={() => searchRef?.current?.focus()} />
    </Container>
  );
}
Search.defaultProps = {
  collapsable: false,
};
export default Search;
