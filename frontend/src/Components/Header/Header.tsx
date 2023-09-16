import { Nav, Icon, Image, Content } from './Header.styles';
import logo from './Logo.svg';
import Search from '../Search';
import Button from '../Button';

import HeaderProps from './Header.types';

function Header({ actions, onSearch }: HeaderProps): JSX.Element {
  return (
    <Nav>
      <Icon href='/'>
        <Image src={logo} alt='log' />
      </Icon>
      <Content>
        {actions.map(({ id, name, onAction }) => (
          <Button key={id} type='button' onClick={onAction}>
            {name}
          </Button>
        ))}
        <Search collapsable onSearch={onSearch} />
      </Content>
    </Nav>
  );
}
export default Header;
