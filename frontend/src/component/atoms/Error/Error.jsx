import React from 'react';
import PropTypes from 'prop-types';
import { textStyle } from './Error.style';

const Error = ({ error }) => (
  <p style={textStyle}>{error}</p>
);

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
