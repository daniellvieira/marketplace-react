import Header from 'components/Header';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_CATEGORY } from 'store/categories/reducer';

import Item from 'components/Item';
import Button from 'components/Button';

import S from './Category.module.css';

const Category = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(GET_CATEGORY(categoryName));
  }, [dispatch, categoryName]);

  const { category, items } = useSelector((state) => {
    const regexp = new RegExp(state.search, 'i');

    return {
      category:
        state.categories.find((category) => category.id === categoryName) || {},
      items: state.items.filter(
        (item) => item.category === categoryName && item.title.match(regexp),
      ),
    };
  });

  return (
    <div>
      <Header
        title={category.name}
        description={category.description}
        imageSrc={category.header}
      >
        <Button onClick={() => navigate(`/advertise/${categoryName}`)}>
          Advertise Here
        </Button>
      </Header>

      <div className={S.items}>
        {items?.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
