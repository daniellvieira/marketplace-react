import React, { useEffect } from 'react';

import Header from 'components/Header';
import Select from 'components/Select';
import Button from 'components/Button';

import S from './Payment.module.scss';
import { useDispatch } from 'react-redux';
import { LOAD_CHECKOUT_REQUEST } from 'store/cart/reducer';

const Payment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LOAD_CHECKOUT_REQUEST());
  }, [dispatch]);

  return (
    <div className={S.container}>
      <Header title="Checkout" imageSrc={''} className={S.header} />
      <div className={S.data}>
        <p className={S.paymentMethod}>Hi user! Choice your payment method: </p>
        <Select placeholder="Payment method" alt="payment method">
          <option value="-">---- Payment Method ----</option>
        </Select>
        <div className={S.content}>
          <p>Total + Tax: $ 0.00</p>
        </div>
        <div className={S.finish}>
          <Button>Finish</Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
