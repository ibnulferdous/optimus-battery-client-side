import Box from "@mui/material/Box";
import clientPromise from "../../lib/mongodb"; // Mongodb connection
import Head from "next/head";
import ProductIntro from "../../components/singleProductPage/Product_Intro";
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
    images,
  } = product;

  return (
    <>
      {/* Head part for meta data */}
      <Head>
        <title>{`${model}- IPS/UPS/Inverter battery`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />
        <meta
          name="description"
          key="desc"
          content={`${model} is a reliable choice for IPS, UPS and Inverters with the price of ৳${price}. It provides long backup and requires low maintenance...`}
        />
        <meta
          property="og:title"
          content={`${model}- IPS/UPS/Inverter battery`}
        />
        <meta
          property="og:description"
          content={`${model} is a reliable choice for IPS, UPS and Inverters with the price of ৳${price}. It provides long backup and requires low maintenance...`}
        />
        <meta property="og:image" content={image_name} />
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
            images={images}
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
      fallback: true,
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
