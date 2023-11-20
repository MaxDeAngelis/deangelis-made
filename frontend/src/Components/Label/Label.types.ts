import { ReactNode } from 'react';

export interface LabelProps extends React.HTMLProps<HTMLLabelElement> {
  varient?: 'small' | 'normal' | 'large';
  children: ReactNode;
}
