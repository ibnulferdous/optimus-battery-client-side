import clientPromise from "../../lib/mongodb";

export default function SingleProduct({ product }) {
  console.log(product);
  return (
    <>
      <h1>{product.model}</h1>
    </>
  );
}

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
