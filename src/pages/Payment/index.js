import React, { useEffect, useState } from 'react';

import Header from 'components/Header';
import Select from 'components/Select';
import Button from 'components/Button';

import { useDispatch, useSelector } from 'react-redux';
import {
  FINISH_CHECKOUT_REQUEST,
  LOAD_CHECKOUT_REQUEST,
} from 'store/cart/reducer';

import S from './Payment.module.scss';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('-');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const total = useSelector((state) => state.cart.total);
  const tax = paymentMethod === '-' ? 0 : total * (paymentMethod.tax - 1);
  const totalWithTax = paymentMethod === '-' ? total : total + tax;

  const changePaymentMethod = (event) => {
    const cardId = event.target.value;
    if (cardId === '-') return setPaymentMethod('-');

    setPaymentMethod(user.cards.find((card) => card.id === cardId));
  };

  const handleFinish = () => {
    dispatch(FINISH_CHECKOUT_REQUEST({ totalWithTax, paymentMethod }));
  };

  useEffect(() => {
    dispatch(LOAD_CHECKOUT_REQUEST());
  }, [dispatch]);

  return (
    <div className={S.container}>
      <Header title="Checkout" imageSrc={''} className={S.header} />
      <div className={S.data}>
        <p className={S.paymentMethod}>
          Hi {user.name}! Choice your payment method:{' '}
        </p>
        <Select
          placeholder="Payment method"
          alt="payment method"
          value={paymentMethod.id}
          onChange={changePaymentMethod}
        >
          <option value="-">---- Payment Method ----</option>
          {user.cards?.map((card) => (
            <option key={card.id} value={card.id}>
              {card.name}
            </option>
          ))}
        </Select>
        <div className={S.content}>
          {paymentMethod !== '-' && (
            <>
              <p>
                Payment Method {paymentMethod.name} has a tax rate of{' '}
                {paymentMethod.tax}x{' '}
              </p>
              <p>
                The balance of this card is R${' '}
                {paymentMethod.balance.toFixed(2)}
              </p>
              <p>Tax: R$ {tax.toFixed(2)}</p>
            </>
          )}
          <p>Total + Tax: R$ {totalWithTax.toFixed(2)}</p>
        </div>
        <div className={S.finish}>
          <Button
            disabled={totalWithTax === 0 || paymentMethod === '-'}
            onClick={handleFinish}
          >
            Finish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
