import { styled } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  & > * {
    margin-top: 10px;
  }
`;
