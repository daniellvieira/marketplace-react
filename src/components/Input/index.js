import React, { forwardRef } from 'react';

import S from './Input.module.scss';

const Input = ({ value, onChange, ...otherProps }, ref) => {
  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      {...otherProps}
      className={S.input}
    />
  );
};

export default forwardRef(Input);
