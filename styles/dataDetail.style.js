import styled from 'styled-components';
import { Caption, CaptionBold } from './text.style';

const CardDetailWrapper = styled.article`
  display: grid;
  margin: 2rem;
  padding: 1rem;
  grid-gap: 1rem;
  background-color: ${props => props.theme.color.grey100};
`;

const CardDetailImage = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 400px;
`;

const CardDetailTitle = styled(CaptionBold)`
  color: ${props => props.theme.color.greytext};
`;
const CardDetailSlug = styled(Caption)`
  color: ${props => props.theme.color.greytext};
`;
const CardDetailDesciption = styled(Caption)`
  color: ${props => props.theme.color.greytext};
`;
const CardDetailBody = styled(Caption)`
  color: ${props => props.theme.color.greytext};
`;
const CardDetailPrice = styled(Caption)`
  color: ${props => props.theme.color.greytext};
`;
const CardDetailStock = styled(Caption)`
  color: ${props => props.theme.color.greytext};
`;
const CardDetailAddBasket = styled(CaptionBold)`
  border-radius: 0.5rem;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.greyDark};
  justify-self: flex-start;
  padding: 1rem 3rem;
  cursor: pointer;
`;

const GoBack = styled.div`
  margin: 2rem;
  display: grid;
  justify-self: flex-start;
  span {
    cursor: pointer;
  }
`;

export {
  CardDetailWrapper,
  CardDetailImage,
  CardDetailTitle,
  CardDetailSlug,
  CardDetailDesciption,
  CardDetailBody,
  CardDetailPrice,
  CardDetailStock,
  CardDetailAddBasket,
  GoBack
};
