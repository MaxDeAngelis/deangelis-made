import { CredentialResponse } from '@react-oauth/google';

export interface ActionProps {
  id: string;
  name: string;
  onAction: () => void;
}

export default interface HeaderProps {
  actions: ActionProps[];
  user?: {
    name: string;
    picture: string;
  };
  onSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onLogin: (response: CredentialResponse) => void;
}
