import { styled } from 'styled-components';

export const Description = styled.div`
  width: 100%;
  & textarea {
    font-size: 1.5rem;
    margin-top: 10px;
  }
`;
export const Ingredient = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
export const Step = styled.textarea`
  width: 100%;
  font-size: 1.5rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  margin-top: 10px;
`;
