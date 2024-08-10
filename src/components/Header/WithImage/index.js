import React from 'react';

import S from './WithImage.module.scss';

const WithImage = ({ title, description, className, imageSrc, children }) => {
  return (
    <div>
      <div className={`${className} ${S.header}`}>
        <div className={S['header-text']}>
          <h1>{title}</h1>
          <h2>{description}</h2>
          {children}
        </div>
        <div className={S['header-image']}>
          <img alt={title} src={imageSrc} />
        </div>
      </div>
    </div>
  );
};

export default WithImage;
