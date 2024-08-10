import React, { useEffect } from 'react';
import Header from 'components/Header';
import watchSrc from 'assets/watch.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/Button';
import { getCategories } from 'store/reducers/categories';

import S from './Home.module.scss';
import { getItems } from 'store/reducers/items';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div>
      <Header
        title="Tech"
        description="Buy different types of products on the best website in the world"
        imageSrc={watchSrc}
        className={S.header}
      >
        <Button onClick={() => navigate('/advertise')}>Advertise Here</Button>
      </Header>
      <div className={S.categories}>
        <div className={S['categories-title']}>
          <h1>Categories</h1>
        </div>
        <div className={S['categories-container']}>
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => navigate(`/category/${category.id}`)}
            >
              <img src={category.thumbnail} alt={category.name} />
              <h1>{category.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
