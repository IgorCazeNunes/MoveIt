import React from 'react';
import { ChallengesProvider } from './ChallengesContext';

const AppProvider: React.FC = ({ children }) => (
  <ChallengesProvider>{children}</ChallengesProvider>
);

export default AppProvider;
