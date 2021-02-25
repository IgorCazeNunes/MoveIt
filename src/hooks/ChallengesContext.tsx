import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import challenges from '../../challenges.json';

interface ChallengesProviderProps {
  children: ReactNode;
}

interface ChallengeData {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesCompleted: number;
  activeChallenge: ChallengeData;
  levelUp(): void;
  startNewChallenge(): void;
  completeChallenge(): void;
  resetChallenge(): void;
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
  const [activeChallenge, setActiveChallenge] = useState(null);

  // eslint-disable-next-line no-restricted-properties
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const levelUp = useCallback(() => {
    setLevel(level + 1);
  }, [level]);

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge as ChallengeData);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      // eslint-disable-next-line no-new
      new Notification('Novo desafio ✨', {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
  }, []);

  const completeChallenge = useCallback(() => {
    if (!activeChallenge) {
      // eslint-disable-next-line no-useless-return
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }, [
    activeChallenge,
    currentExperience,
    experienceToNextLevel,
    challengesCompleted,
    levelUp,
  ]);

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, []);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        activeChallenge,
        levelUp,
        startNewChallenge,
        completeChallenge,
        resetChallenge,
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
