import styles from '../styles/index.module.css';

import Head from 'next/head'
import Profile from '../components/profile';
import Posts from '../components/posts';

export default function Home() {
  return (
    <div className={styles.App}>
      <Head>
        <title>JipGaGoSipDa</title>
        <meta property="og:description" content="미친 과고생이 집가고싶어서 만든 블로그" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Profile />
        <Posts />
      </div>
    </div>
  )
}