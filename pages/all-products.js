import clientPromise from "../lib/mongodb";

export default function AllProducts({ products }) {
  return (
    <>
      <div>
        {products.map(({ _id, model, description }) => (
          <div key={_id}>
            <h1>{model}</h1>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </>
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
