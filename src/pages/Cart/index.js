import React from 'react';
import Header from 'components/Header';

import { useDispatch, useSelector } from 'react-redux';
import Item from 'components/Item';
import { resetCart } from 'store/reducers/cart';

import S from './Cart.module.css';
import Button from 'components/Button';

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => {
    let total = 0;

    const regexp = new RegExp(state.search, 'i');
    const cartReduce = state.cart.reduce((items, itemInCart) => {
      const item = state.items.find((item) => item.id === itemInCart.id);
      total += item.price * itemInCart.amount;

      if (item.title.match(regexp)) {
        items.push({
          ...item,
          amount: itemInCart.amount,
        });
      }

      return items;
    }, []);
    return {
      cart: cartReduce,
      total: total,
    };
  });

  return (
    <div>
      <Header
        title="Your cart"
        description="Check out the products you've added to your cart"
      />
      <div className={S.cart}>
        {cart.map((item) => (
          <Item key={item.id} {...item} cart />
        ))}
        <div className={S.total}>
          <strong>Resume</strong>

          <span>
            Subtotal:
            <strong>R$ {total.toFixed(2)}</strong>
          </span>
        </div>
        <Button onClick={() => dispatch(resetCart())}>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
