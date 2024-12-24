import React from 'react';
import { submitStyle } from './Submit.style';

const Submit = React.forwardRef((props, ref) => (
  <>
    <input type="submit" ref={ref} {...props} style={submitStyle} />
  </>
));

Submit.displayName = 'Submit';

export default Submit;
