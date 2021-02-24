/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useChallenges } from '../hooks/ChallengesContext';

import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(): JSX.Element {
  const { currentExperience, experienceToNextLevel } = useChallenges();

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel,
  );

  return (
    <header className={styles.experienceBar}>
      <span>8 xp</span>

      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>

      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
