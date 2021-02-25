import React from 'react';
import { ChallengesProvider } from './ChallengesContext';
import { CountdownProvider } from './CountdownContext';

const AppProvider: React.FC = ({ children }) => (
  <ChallengesProvider>
    <CountdownProvider>{children}</CountdownProvider>
  </ChallengesProvider>
);

export default AppProvider;
