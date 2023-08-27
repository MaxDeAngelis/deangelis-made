/* eslint-disable react/jsx-props-no-spreading */
import { ReactNode } from 'react';

import { Standard, Round } from './Button.style';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  shape: 'round' | 'standard';
  type: 'button' | 'submit';
}
function Button({
  shape = 'standard',
  children,
  ...restProps
}: ButtonProps): JSX.Element {
  const Component = shape === 'round' ? Round : Standard;
  return <Component {...restProps}>{children}</Component>;
}

export default Button;
