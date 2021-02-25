/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback } from 'react';
import { useChallenges } from '../hooks/ChallengesContext';
import { useCountdown } from '../hooks/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(): JSX.Element {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
  } = useChallenges();
  const { resetCountdown } = useCountdown();

  const handleChallengeSucceeded = useCallback(() => {
    completeChallenge();
    resetCountdown();
  }, [completeChallenge, resetCountdown]);

  const handleChallengeFailed = useCallback(() => {
    resetChallenge();
    resetCountdown();
  }, [resetChallenge, resetCountdown]);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} de xp</header>

          <main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt="Challenge Ico"
            />

            <strong>Novo desafio</strong>

            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>

            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
