export interface ActionProps {
  name: string;
  onAction: () => void;
}

export default interface HeaderProps {
  actions: ActionProps[];
}
