// Mongodb connection
import clientPromise from "../../lib/mongodb";
import Head from "next/head";
import ProductIntro from "../../components/singleProductPage/ProductIntro";

export default function SingleProduct({ product }) {
  const {
    application,
    capacity,
    country_of_origin,
    description,
    width,
    height,
    length,
    model,
    path,
    price,
    type,
    voltage,
    warranty,
    weight,
  } = product;

  return (
    <>
      {/* Head part for meta data */}
      <Head>
        <title>{`${model}Ah- IPS/UPS/Inverter battery`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductIntro
          model={model}
          capacity={capacity}
          description={description}
          price={price}
          warranty={warranty}
        />
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
