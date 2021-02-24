import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

interface ChallengesProviderProps {
  children: ReactNode;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp(): void;
  startNewChallenge(): void;
}

export const ChallengesContext = createContext<ChallengesContextData>(
  {} as ChallengesContextData,
);

export function ChallengesProvider({
  children,
}: ChallengesProviderProps): JSX.Element {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const levelUp = useCallback(() => {
    setLevel(level + 1);
  }, [level]);

  const startNewChallenge = useCallback(() => {
    console.log('New Challenge');
  }, []);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

export function useChallenges(): ChallengesContextData {
  const context = useContext(ChallengesContext);

  if (!context) {
    throw new Error('useChallenges must be used within an ChallengesProvider');
  }

  return context;
}
