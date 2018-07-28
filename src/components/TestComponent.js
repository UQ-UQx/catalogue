import React from 'react';
import PropTypes from 'prop-types';

const TestComponent = props => {
  const { message } = props;

  return <div>{message}</div>;
};

TestComponent.propTypes = {
  message: PropTypes.string,
};

TestComponent.defaultProps = {
  message: 'This is a test message',
};

export default TestComponent;
