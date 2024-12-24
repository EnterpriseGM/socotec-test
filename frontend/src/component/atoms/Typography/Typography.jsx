import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({ children, variant, ...props }) => {
  switch (variant) {
    case 'h1':
      return <h1 {...props}>{children}</h1>;
    case 'h2':
      return <h2 {...props}>{children}</h2>;
    case 'h3':
      return <h3 {...props}>{children}</h3>;
    case 'p':
      return <p {...props}>{children}</p>;
    default:
      return <p {...props}>{children}</p>;
  }
};

Typography.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'p']),
};

Typography.defaultProps = {
  children: null,
  variant: 'p',
};

export default Typography;
