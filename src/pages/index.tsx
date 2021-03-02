import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { Profile } from '../components/Profile';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { ExperienceBar } from '../components/ExperienceBar';
import { CompletedChallenges } from '../components/CompletedChallenges';

import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../hooks/ChallengesContext';
import { CountdownProvider } from '../hooks/CountdownContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({
  level,
  currentExperience,
  challengesCompleted,
}: HomeProps): JSX.Element {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | Move.it </title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const {
    Moveit_level,
    Moveit_currentExperience,
    Moveit_challengesCompleted,
  } = ctx.req.cookies;

  return {
    props: {
      level: Number(Moveit_level),
      currentExperience: Number(Moveit_currentExperience),
      challengesCompleted: Number(Moveit_challengesCompleted),
    },
  };
};
