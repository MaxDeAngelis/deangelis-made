/* eslint-disable react/jsx-props-no-spreading */
import { ReactNode } from 'react';

import { Label } from './Label.style';

interface LabelProps extends React.HTMLProps<HTMLLabelElement> {
  children: ReactNode;
}

export default function Component({
  children,
  ...restProps
}: LabelProps): JSX.Element {
  return <Label {...restProps}>{children}</Label>;
}
