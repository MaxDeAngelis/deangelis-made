import { StyledHeader, StyledLink } from './Header.styles';

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <StyledLink href='/'>Home</StyledLink>
      <StyledLink href='/search'>Search</StyledLink>
    </StyledHeader>
  );
}
export default Header;
