import React from 'react';

import S from './Header.module.scss';
import WithoutImage from './WithoutImage';
import WithImage from './WithImage';

const Header = ({ title, description, className = '', imageSrc, children }) => {
  return (
    <header className={`${S.header}`}>
      {title && !imageSrc && (
        <WithoutImage title={title} description={description}>
          {children}
        </WithoutImage>
      )}
      {title && imageSrc && (
        <WithImage
          title={title}
          description={description}
          imageSrc={imageSrc}
          className={className}
        >
          {children}
        </WithImage>
      )}
    </header>
  );
};

export default Header;
