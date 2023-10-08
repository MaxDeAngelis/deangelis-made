import { GoogleLogin } from '@react-oauth/google';
import { Avatar, Nav, Icon, Image, Content } from './Header.styles';
import logo from './Logo.svg';
import Search from '../Search';
import Button from '../Button';

import HeaderProps from './Header.types';

function Header({
  actions,
  user,
  onSearch,
  onLogin,
}: HeaderProps): JSX.Element {
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
        {user ? (
          <Avatar src={user.picture} alt={user.name} height='32' width='32' />
        ) : (
          <GoogleLogin
            type='icon'
            shape='circle'
            onSuccess={onLogin}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        )}
      </Content>
    </Nav>
  );
}
export default Header;
