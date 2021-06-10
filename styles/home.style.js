import styled from 'styled-components';
import { Caption } from './text.style';

const Main = styled.main`
  padding: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const CardItem = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: 1fr;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.color.greyLight};
  cursor: pointer;
`;

const CardImage = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 250px;
  border-radius: 0.5rem;
`;

const CardTitle = styled(Caption)`
  padding: 1rem;
`;

const CardPrice = styled(Caption)`
  padding: 1rem;
`;

export { Main, CardItem, CardImage, CardTitle, CardPrice };
