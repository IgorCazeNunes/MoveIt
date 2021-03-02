import React from 'react';
import AppProvider from '../hooks';

import '../styles/global.css';

function MyApp({ Component, pageProps }): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
