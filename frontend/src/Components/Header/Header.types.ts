export interface ActionProps {
  id: string;
  name: string;
  onAction: () => void;
}

export default interface HeaderProps {
  actions: ActionProps[];
  onSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
