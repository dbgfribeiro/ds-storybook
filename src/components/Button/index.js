import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, backgroundColor, textColor, borderStyle, handleClick }) => {
  const style = {
    background: backgroundColor,
    color: textColor,
    height: '32px',
    padding: '8px 16px 8px 16px',
    borderRadius: '4px',
    border: borderStyle,
  }

  return (
    <button onClick={handleClick} style={style}>{label}</button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
  clearImmediate: PropTypes.string,
  textColor: PropTypes.string,
  borderStyle: PropTypes.string,
}

Button.defaultProps = {
  handleClick: null,
  backgroundColor: null,
  textColor: null,
  borderStyle: null,
}

export default Button;
