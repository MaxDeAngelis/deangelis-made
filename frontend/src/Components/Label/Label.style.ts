import { styled } from 'styled-components';
import { LabelProps } from './Label.types';

const sizeMap: { [key: string]: string } = {
  small: '1rem;',
  normal: '1.5rem;',
  large: '2rem;',
};

// eslint-disable-next-line import/prefer-default-export
export const Label = styled.label<LabelProps>`
  font-size: ${({ varient }) => sizeMap[varient || 'normal']}
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  & > * {
    margin-top: 10px;
    font-weight: normal;
    font-size: 1.5rem;
  }
`;
