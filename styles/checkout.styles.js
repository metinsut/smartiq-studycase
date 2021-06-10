import styled from 'styled-components';
import { Caption, CaptionBold } from './text.style';

const CheckoutWrapper = styled.div`
  margin: 2rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
`;

const ItemListBlock = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  align-content: flex-start;
`;

const Card = styled.div`
  background-color: ${props => props.theme.color.grey100};
  padding: 1.5rem 2rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 50px 1fr auto auto;
  justify-items: flex-start;
  align-items: center;
  grid-auto-flow: column;
  border-radius: 0.5rem;
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 50px;
`;
const CardTitle = styled(CaptionBold)`
  color: ${props => props.theme.color.greytext};
`;
const CardPrice = styled(CaptionBold)`
  color: ${props => props.theme.color.greytext};
`;

const PaymentBlock = styled.div`
  background-color: ${props => props.theme.color.grey100};
  padding: 1.5rem 2rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  align-self: flex-start;
  border-radius: 0.5rem;
`;
const PaymentTotal = styled(CaptionBold)`
  color: ${props => props.theme.color.greytext};
`;
const PaymentCardDetail = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
`;
const Label = styled.label`
  display: grid;
  grid-template-columns: 1fr;
  font-size: 1.6rem;
  color: ${props => props.theme.color.greytext};
`;
const Input = styled.input`
  font-size: 2rem;
  color: ${props => props.theme.color.greytext};
  height: 4rem;
  border: ${props => (props.hasError ? '2px solid red' : 'none')};
  border-radius: 0.5rem;
`;
const PaymentFinish = styled(CaptionBold)`
  border-radius: 0.5rem;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.greyDark};
  justify-self: flex-end;
  padding: 1rem 3rem;
  cursor: pointer;
`;

const PaymentSuccess = styled(CaptionBold)`
  display: grid;
  grid-column: 1/-1;
  border-radius: 0.5rem;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.primary};
  padding: 1rem 3rem;
`;

export {
  CheckoutWrapper,
  ItemListBlock,
  Card,
  CardImage,
  CardTitle,
  CardPrice,
  PaymentBlock,
  PaymentTotal,
  PaymentCardDetail,
  PaymentFinish,
  Label,
  Input,
  PaymentSuccess
};
