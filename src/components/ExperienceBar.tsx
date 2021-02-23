import React from 'react';

import styles from '../styles/components/ExperienceBar.module.css';

export const ExperienceBar: React.FC = () => {
  return (
    <header className={styles.experienceBar}>
      <span>8 xp</span>

      <div>
        <div style={{ width: '50%' }} />

        <span className={styles.currentExperience} style={{ left: '50%' }}>
          300 xp
        </span>
      </div>

      <span>688 xp</span>
    </header>
  );
};
