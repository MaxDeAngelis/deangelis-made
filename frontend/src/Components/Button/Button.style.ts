import { styled } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Standard = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0 1rem;
  width: fit-content;
  & > img {
    margin-right: 1rem;
  }
`;
export const Round = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  border-radius: 100%;
  margin: 0;
  padding: 0;
  line-height: 38px;
  font-size: 18px;
  &:hover {
    border-color: #d1d1d1;
  }
`;
