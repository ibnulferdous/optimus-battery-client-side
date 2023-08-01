import AllProductsSection from "../components/HomePage/All_Products_section";
import Box from "@mui/material/Box";
import clientPromise from "../lib/mongodb"; // Mongodb
import Head from "next/head";
import Hero from "../components/HomePage/Hero";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>
          Optimus Battery- Reliable power source for IPS/UPS/Inverter
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          key="desc"
          content="Optimus Battery makes reliable batteries for IPS, UPS and Inverters with capacity ranges from 100, 130, 165, 200 and 230..."
        />
        <meta
          property="og:title"
          content="Optimus Battery- Reliable power source for IPS/UPS/Inverter"
        />
        <meta
          property="og:description"
          content="Optimus Battery makes reliable batteries for IPS, UPS and Inverters with capacity ranges from 100, 130, 165, 200 and 230..."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/cTp84SB/og-for-home.jpg"
        />
        <meta name="robots" content="all" />
      </Head>

      <main>
        <Box sx={{ mb: { xs: "75px", md: "100px" } }}>
          <Hero />
          <AllProductsSection products={products} />
        </Box>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db("optimus_battery");

    const products = await db.collection("products").find().toArray();

    return {
      props: { products: JSON.parse(JSON.stringify(products)) },
      revalidate: 1,
    };
  } catch (e) {
    console.error(e);
  }
}
