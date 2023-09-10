import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const Input = styled.input`
  padding-right: 4rem !important;
  margin-bottom: 0;
`;
export const CollapsableInput = styled(Input)`
  width: 0;
  transition: all 0.5s;
  &[type='text'] {
    border: none;
  }
  &:focus {
    width: 20rem;
  }
`;

export const Img = styled.img`
  position: absolute;
  right: 1rem;
  cursor: pointer;
`;
