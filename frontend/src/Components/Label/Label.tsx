/* eslint-disable react/jsx-props-no-spreading */
import { Label } from './Label.style';
import { LabelProps } from './Label.types';

export default function Component({
  children,
  ...restProps
}: LabelProps): JSX.Element {
  return <Label {...restProps}>{children}</Label>;
}
Component.defaultProps = {
  varient: 'normal',
};
