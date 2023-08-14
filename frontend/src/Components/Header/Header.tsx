import { StyledHeader, StyledIcon, StyledHeaderContent } from './Header.styles';
import logo from './Logo.svg';
import Search from '../Search';

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <StyledIcon href='/'>
        <img src={logo} alt='log' />
      </StyledIcon>
      <StyledHeaderContent>
        <Search />
      </StyledHeaderContent>
    </StyledHeader>
  );
}
export default Header;
