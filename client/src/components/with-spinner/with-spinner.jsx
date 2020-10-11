import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
