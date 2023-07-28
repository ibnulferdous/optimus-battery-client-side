// Mongodb connection
import { Box } from "@mui/material";
import clientPromise from "../../lib/mongodb";
import Head from "next/head";
import ProductIntro from "../../components/singleProductPage/Product_Intro";
import ProductSpecifications from "../../components/singleProductPage/Product_Specifications";
import SectionTwo from "../../components/singleProductPage/Section_two";

export default function SingleProduct({ product }) {
  const {
    application,
    capacity,
    country_of_origin,
    description,
    model,
    path,
    price,
    type,
    voltage,
    warranty,
    weight,
    length,
    width,
    height,
    image_name,
  } = product;

  console.log(product);

  return (
    <>
      {/* Head part for meta data */}
      <Head>
        <title>{`${model}Ah- IPS/UPS/Inverter battery`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box sx={{ marginBlock: { xs: "75px", md: "100px" } }}>
          <ProductIntro
            model={model}
            capacity={capacity}
            description={description}
            price={price}
            warranty={warranty}
            image_name={image_name}
          />
          <SectionTwo
            model={model}
            capacity={capacity}
            description={description}
            price={price}
            warranty={warranty}
            type={type}
            voltage={voltage}
            application={application}
            country_of_origin={country_of_origin}
            weight={weight}
            length={length}
            width={width}
            height={height}
          />
        </Box>
      </main>
    </>
  );
}

// Function to find out the possible dynamic routes to generate SSG
export async function getStaticPaths() {
  try {
    const client = await clientPromise;
    const db = client.db("optimus_battery");

    const products = await db.collection("products").find().toArray();

    const data = JSON.parse(JSON.stringify(products));

    const paths = data.map((product) => {
      return {
        params: { path: product.path.toString() },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (e) {
    console.error(e);
  }
}

// Function to fetch data for every single product
export async function getStaticProps({ params }) {
  const path = params.path;

  try {
    const client = await clientPromise;
    const db = client.db("optimus_battery");

    const product = await db.collection("products").findOne({ path });

    return {
      props: { product: JSON.parse(JSON.stringify(product)) },
      revalidate: 1,
    };
  } catch (e) {
    console.error(e);
  }
}
