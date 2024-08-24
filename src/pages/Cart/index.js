import React from 'react';
import Header from 'components/Header';
import { useSelector } from 'react-redux';
import Item from 'components/Item';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

import S from './Cart.module.css';

const Cart = () => {
  const navigate = useNavigate();

  const { cart, total } = useSelector((state) => {
    const regexp = new RegExp(state.search, 'i');
    const cartReduce = state.cart.data.reduce((items, itemInCart) => {
      const item = state.items.find((item) => item.id === itemInCart.id);

      if (item?.title.match(regexp)) {
        items.push({
          ...item,
          amount: itemInCart.amount,
        });
      }

      return items;
    }, []);
    return {
      cart: cartReduce,
      total: state.cart.total,
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
            <strong> R$ {total?.toFixed(2)}</strong>
          </span>
        </div>
        <Button onClick={() => navigate('/checkout')}>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
