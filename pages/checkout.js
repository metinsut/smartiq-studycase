import { useSelector } from 'react-redux';
import {
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
} from '../styles/checkout.styles';
import {
  getBasketListSelector,
  getBasketListTotalPriceSelector
} from '../store/data.reducer';
import { useState } from 'react';

const Checkout = () => {
  const basketList = useSelector(getBasketListSelector);
  const basketListTotalPrice = useSelector(getBasketListTotalPriceSelector);

  const [numberError, setNumberError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [cvcError, setCvcError] = useState(false);

  const [number, setNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');

  const [paymemtStatus, setPaymentStatus] = useState(false);

  const completePayment = () => {
    if (!number) {
      setNumberError(true);
      return;
    } else {
      setNumberError(false);
    }
    if (!month) {
      setMonthError(true);
      return;
    } else {
      setMonthError(false);
    }
    if (!year) {
      setYearError(true);
      return;
    } else {
      setYearError(false);
    }
    if (!cvc) {
      setCvcError(true);
      return;
    } else {
      setCvcError(false);
    }
    setPaymentStatus(true);
  };

  return (
    <CheckoutWrapper>
      {paymemtStatus && <PaymentSuccess>Payment Success</PaymentSuccess>}
      <ItemListBlock>
        {basketList ? (
          basketList.map((item, key) => (
            <Card key={key}>
              <CardImage src={item.image}></CardImage>
              <CardTitle>{item.title}</CardTitle>
              <CardPrice>{item.sale_price}</CardPrice>
            </Card>
          ))
        ) : (
          <p>Please Add Item to List</p>
        )}
      </ItemListBlock>
      <PaymentBlock>
        <PaymentTotal>Total Price: {basketListTotalPrice}</PaymentTotal>
        <PaymentCardDetail>
          <Label htmlFor="card-number">
            Card Number
            <Input
              id="card-number"
              value={number}
              onChange={e => setNumber(e.target.value)}
              hasError={numberError}
              type="number"
            />
          </Label>
          <Label htmlFor="card-month">
            Card Month
            <Input
              id="card-month"
              value={month}
              onChange={e => setMonth(e.target.value)}
              hasError={monthError}
              type="number"
            />
          </Label>
          <Label htmlFor="card-year">
            Card Year
            <Input
              id="card-year"
              value={year}
              onChange={e => setYear(e.target.value)}
              hasError={yearError}
              type="number"
            />
          </Label>
          <Label htmlFor="card-cvc">
            Card CVC
            <Input
              id="card-cvc"
              value={cvc}
              onChange={e => setCvc(e.target.value)}
              hasError={cvcError}
              type="number"
            />
          </Label>
        </PaymentCardDetail>
        <PaymentFinish onClick={completePayment}>
          Complete Payment
        </PaymentFinish>
      </PaymentBlock>
    </CheckoutWrapper>
  );
};

export default Checkout;
