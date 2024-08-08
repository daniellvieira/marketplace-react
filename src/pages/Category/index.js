import Header from 'components/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import S from './Category.module.css';
import Item from 'components/Item';

const Category = () => {
  const { categoryName } = useParams();

  const { category, items } = useSelector((state) => {
    const regexp = new RegExp(state.search, 'i');

    return {
      category: state.categories.find(
        (category) => category.id === categoryName,
      ),
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
      />

      <div className={S.items}>
        {items?.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
