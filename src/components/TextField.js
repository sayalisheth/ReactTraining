import React from 'react';

const TextField = (props) => {
  const { placeholder, type, onChange, value } = props;

    return (
      <input
        type = {type}
        placeholder = {placeholder}
        onChange = {onChange}
        value = {value}
      />
    )
};

export default TextField;
