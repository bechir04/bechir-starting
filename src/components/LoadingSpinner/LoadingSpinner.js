import React from 'react';

const LoadingSpinner = () => (
  <div style={spinnerStyle}>
    <div className="lds-ring">
      <div></div><div></div><div></div><div></div>
    </div>
  </div>
);

const spinnerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

export default LoadingSpinner;
