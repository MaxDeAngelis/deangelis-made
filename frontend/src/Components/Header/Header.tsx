import { StyledHeader, StyledIcon, StyledHeaderContent } from './Header.styles';
import logo from './Logo.svg';
import Search from '../Search';
import Button from '../Button';

import HeaderProps from './Header.types';

function Header({ actions }: HeaderProps): JSX.Element {
  return (
    <StyledHeader>
      <StyledIcon href='/'>
        <img src={logo} alt='log' />
      </StyledIcon>
      <StyledHeaderContent>
        {actions.map(({ name, onAction }) => (
          <Button type='button' onClick={onAction}>
            {name}
          </Button>
        ))}
        <Search />
      </StyledHeaderContent>
    </StyledHeader>
  );
}
export default Header;
