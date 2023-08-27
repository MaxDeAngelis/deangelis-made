import { ReactNode, forwardRef } from 'react';

import { Label } from './Label.style';

interface LabelProps extends React.HTMLProps<HTMLLabelElement> {
  children: ReactNode;
}
type Ref = HTMLLabelElement;

export default forwardRef<Ref, LabelProps>((props, ref) => (
  <Label ref={ref}>{props.children}</Label>
));
