/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useChallenges } from '../hooks/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile(): JSX.Element {
  const { level } = useChallenges();

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/igorcazenunes.png" alt="Igor Cazé" />

      <div>
        <strong>Igor Cazé Nunes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
