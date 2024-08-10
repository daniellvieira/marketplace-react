import React from 'react';

import S from './WithoutImage.module.scss';

const WithoutImage = ({ title, description, children }) => {
  return (
    <div className={S.container}>
      <h1 className={S.title}>{title}</h1>
      <h2 className={S.description}>{description}</h2>
      {children}
    </div>
  );
};

export default WithoutImage;
