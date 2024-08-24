import React from 'react';

import S from './Button.module.scss';

const Button = ({ children, type, onClick, disabled }) => {
  return (
    <button
      className={S.button}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
