import React from 'react';

import S from './Button.module.scss';

const Button = ({ children, type, onClick }) => {
  return (
    <button className={S.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
