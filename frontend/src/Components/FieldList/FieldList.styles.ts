import { styled } from 'styled-components';

export const Input = styled.input`
  margin: 0;
`;
export const TextArea = styled.textarea`
  margin: 0;
`;
export const Heading = styled(Input)`
  font-weight: bold;
  margin: 1rem 0;
`;
export const OL = styled.ol`
  margin-bottom: 0;
  margin-left: 2rem;
  list-style-position: outside;
  & > li:last-child {
    margin-bottom: 0;
  }
`;
export const UL = styled.ul`
  margin-bottom: 0;
  margin-left: 2rem;
  list-style-position: outside;
  & > li:last-child {
    margin-bottom: 0;
  }
`;

export const Row = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 38px;
  column-gap: 1rem;
  width: 100%;
  align-items: center;
  margin: 0 0 1rem 1rem;
`;
