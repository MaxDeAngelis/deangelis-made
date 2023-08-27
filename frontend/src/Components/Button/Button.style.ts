import { styled } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Standard = styled.button``;
export const Round = styled.button`
  border-color: transparent;
  border-radius: 100%;
  width: 38px;
  height: 38px;
  margin: 0;
  padding: 0;
  line-height: 38px;
  font-size: 18px;
  & > img {
    width: 75%;
    height: 100%;
    color: #d1d1d1;
  }
  &:hover {
    border-color: #d1d1d1;
  }
`;
