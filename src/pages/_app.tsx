import React from 'react';
import AppProvider from '../hooks';

import '../styles/global.css';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
