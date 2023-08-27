import { styled } from 'styled-components';

export const Toolbar = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  align-items: center;
`;

export const CropperContainer = styled.div`
  width: 100%;
  min-height: 400px;
  position: relative;
`;

export const Img = styled.img`
  max-width: 400px;
`;
