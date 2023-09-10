/* eslint-disable import/prefer-default-export */
import { styled } from 'styled-components';

import Label from '../../Components/Label';

export const SearchLabel = styled(Label)`
  margin-bottom: 2rem;
  & h5 {
    margin-bottom: 0;
  }
  & div,
  input {
    width: 30rem;
  }
`;
