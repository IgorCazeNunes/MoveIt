import React from 'react';

import styles from '../styles/components/Profile.module.css';

export function Profile(): JSX.Element {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/igorcazenunes.png" alt="Igor Cazé" />

      <div>
        <strong>Igor Cazé Nunes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
