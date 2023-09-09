import { styled } from 'styled-components';

export const Label = styled.label`
  display: grid;
  grid-template-columns: 8rem 8rem auto;
  column-gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
  max-width: 400px;
`;
export const ReadOnlyLabel = styled(Label)`
  grid-template-columns: 8rem 3rem auto;
  column-gap: 0.5rem;
  margin-bottom: 1rem;
  > span {
    font-weight: normal;
  }
  & > span:first-child {
    text-align: end;
  }
`;

export const TimeInput = styled.input`
  margin: 0;
`;

export const UnitSelect = styled.select`
  margin: 0;
`;
