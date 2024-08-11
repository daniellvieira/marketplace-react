import React from 'react';

import S from './Payment.module.scss';
import Header from 'components/Header';
import Select from 'components/Select';
import Button from 'components/Button';

const Payment = () => {
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
