import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Optimus Battery- Reliable power source for IPS/UPS/Inverter
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Welcome to Optimus Battery</h1>

        <p className={styles.description}>New website comming soon!</p>
      </main>

      <footer>Developed by Tazrian & Ibnul</footer>
    </div>
  );
}
