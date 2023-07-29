import AllProductsSection from "../components/HomePage/All_Products_section";
import Box from "@mui/material/Box";
import clientPromise from "../lib/mongodb"; // Mongodb
import Head from "next/head";
import Typography from "@mui/material/Typography";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>
          Optimus Battery- Reliable power source for IPS/UPS/Inverter
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box sx={{ marginBlock: { xs: "75px", md: "100px" } }}>
          <AllProductsSection products={products} />
        </Box>
      </main>

      <footer>Developed by Tazrian & Ibnul</footer>
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
