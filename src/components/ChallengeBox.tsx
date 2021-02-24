/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useChallenges } from '../hooks/ChallengesContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(): JSX.Element {
  const { activeChallenge, resetChallenge } = useChallenges();

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
              onClick={resetChallenge}
            >
              Falhei
            </button>

            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={() => {
                console.log('Completei');
              }}
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
