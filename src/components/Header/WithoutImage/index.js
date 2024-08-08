import React from 'react';

import S from './WithoutImage.module.scss';

const WithoutImage = ({ title, description }) => {
  return (
    <div className={S.container}>
      <h1 className={S.title}>{title}</h1>
      <h2 className={S.description}>{description}</h2>
    </div>
  );
};

export default WithoutImage;
