import React, { memo, useState } from 'react';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineCheck,
  AiFillEdit,
  AiFillCloseCircle,
} from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';

import { changeItem, changeWishList, deleteItem } from 'store/reducers/items';
import { useDispatch, useSelector } from 'react-redux';
import { changeCart, changeAmount } from 'store/cart/reducer';
import Input from 'components/Input';
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
  const { title, description, photo, favorite, price, id, cart, amount } =
    props;

  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const dispatch = useDispatch();

  const inCart = useSelector((state) =>
    state.cart.some((itemInCart) => itemInCart.id === id),
  );

  const resolveWishList = () => {
    dispatch(changeWishList(id));
  };

  const resolveCart = () => {
    dispatch(changeCart(id));
  };

  const updateItem = () => {
    dispatch(changeItem({ id, item: { title: newTitle } }));
    setEditMode(false);
  };

  const editModeComponent = (
    <>
      {editMode ? (
        <AiOutlineCheck
          {...iconProps}
          className={S['item-action']}
          onClick={updateItem}
        />
      ) : (
        <AiFillEdit
          {...iconProps}
          className={S['item-action']}
          onClick={() => setEditMode(true)}
        />
      )}
    </>
  );

  return (
    <div
      className={classNames(S.item, {
        [S.itemInCart]: cart,
      })}
    >
      <AiFillCloseCircle
        {...iconProps}
        className={`${S['item-action']} ${S['item-delete']}`}
        onClick={() => dispatch(deleteItem(id))}
      />

      <div className={S['item-image']}>
        <img src={photo} alt={title} />
      </div>
      <div className={S['item-description']}>
        <div className={S['item-title']}>
          {editMode ? (
            <Input
              value={newTitle}
              onChange={(event) => setNewTitle(event.target.value)}
            />
          ) : (
            <h2>{title}</h2>
          )}
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
              <>
                <FaCartPlus
                  {...iconProps}
                  className={S['item-action']}
                  color={inCart ? '#1875E8' : iconProps.color}
                  onClick={resolveCart}
                />
                {editModeComponent}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
