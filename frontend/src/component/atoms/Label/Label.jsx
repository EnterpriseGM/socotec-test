import React from 'react';
import PropTypes from 'prop-types';
import { labelStyle } from './Label.style';

const Label = ({ children, ...props }) => (
  <p {...props} style={labelStyle}>{children}</p>
);

Label.propTypes = {
  children: PropTypes.node,
};

Label.defaultProps = {
  children: null,
};

export default Label;
