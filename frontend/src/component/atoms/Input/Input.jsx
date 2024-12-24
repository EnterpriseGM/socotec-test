import React from 'react';
import { inputStyle } from './Input.style';

const Input = React.forwardRef((props, ref) => (
  <>
    <input ref={ref} {...props} style={inputStyle} />
  </>
));

Input.displayName = 'Input';

export default Input;
