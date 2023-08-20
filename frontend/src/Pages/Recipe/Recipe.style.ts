import { styled } from 'styled-components';

export const Ingredient = styled.input`
  width: 100%;
  height: 2rem;
  margin-bottom: 10px;
`;
export const Step = styled.textarea`
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  & > * {
    margin-top: 10px;
  }
`;
