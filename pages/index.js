import clientPromise from "../lib/mongodb"; // Mongodb
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ isConnected }) {
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

      {isConnected ? (
        <h2 className="subtitle">You are connected to MongoDB</h2>
      ) : (
        <h2 className="subtitle">
          You are NOT connected to MongoDB. Check the <code>README.md</code> for
          instructions.
        </h2>
      )}

      <footer>Developed by Tazrian & Ibnul</footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
