import React, { useEffect } from 'react';

import Header from 'components/Header';
import Select from 'components/Select';
import Button from 'components/Button';

import S from './Payment.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_CHECKOUT_REQUEST } from 'store/cart/reducer';

const Payment = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const total = useSelector((state) => state.cart.total);
  console.log(total);

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
        <Select placeholder="Payment method" alt="payment method">
          <option value="-">---- Payment Method ----</option>
          {user.cards?.map((card) => (
            <option key={card.id} value={card.id}>
              {card.name}
            </option>
          ))}
        </Select>
        <div className={S.content}>
          <p>Total + Tax: R$ {total.toFixed(2)}</p>
        </div>
        <div className={S.finish}>
          <Button>Finish</Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
