import React from 'react';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';

import { changeWishList } from 'store/reducers/items';
import { useDispatch, useSelector } from 'react-redux';
import { changeCart, changeAmount } from 'store/reducers/cart';

import classNames from 'classnames';

import S from './Item.module.scss';

const iconProps = {
  color: '#041833',
  size: 24,
};

const amountProps = {
  size: 32,
  color: '#1875E8',
};

const Item = (props) => {
  const dispatch = useDispatch();
  const { title, description, photo, favorite, price, id, cart, amount } =
    props;

  const inCart = useSelector((state) =>
    state.cart.some((itemInCart) => itemInCart.id === id),
  );

  const resolveWishList = () => {
    dispatch(changeWishList(id));
  };

  const resolveCart = () => {
    dispatch(changeCart(id));
  };

  return (
    <div
      className={classNames(S.item, {
        [S.itemInCart]: cart,
      })}
    >
      <div className={S['item-image']}>
        <img src={photo} alt={title} />
      </div>
      <div className={S['item-description']}>
        <div className={S['item-title']}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={S['item-info']}>
          <div className={S['item-price']}>R$ {price.toFixed(2)}</div>
          <div className={S['item-actions']}>
            {favorite ? (
              <AiFillHeart
                {...iconProps}
                color="#f00"
                className={S['item-action']}
                onClick={resolveWishList}
              />
            ) : (
              <AiOutlineHeart
                {...iconProps}
                className={S['item-action']}
                onClick={resolveWishList}
              />
            )}

            {cart ? (
              <div className={S.amount}>
                Amount:
                <AiFillMinusCircle
                  {...amountProps}
                  onClick={() => {
                    if (amount >= 1) dispatch(changeAmount({ id, amount: -1 }));
                  }}
                />
                <span>{String(amount || 0).padStart(2, '0')}</span>
                <AiFillPlusCircle
                  {...amountProps}
                  onClick={() => dispatch(changeAmount({ id, amount: 1 }))}
                />
              </div>
            ) : (
              <FaCartPlus
                {...iconProps}
                className={S['item-action']}
                color={inCart ? '#1875E8' : iconProps.color}
                onClick={resolveCart}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
