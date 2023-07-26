// import clientPromise from "../lib/mongodb";

// export default function SingleProduct() {
//   return (
//     <>
//       <h1>Hello</h1>
//     </>
//   );
// }

// export async function getStaticProps() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("optimus_battery");

//     const products = await db.collection("products").find().toArray();

//     return {
//       props: { products: JSON.parse(JSON.stringify(products)) },
//       revalidate: 1,
//     };
//   } catch (e) {
//     console.error(e);
//   }
// }

// export async function getStaticPaths() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("optimus_battery");

//     const products = await db.collection("products").find().toArray();

//     const data = JSON.parse(products);

//     const paths = products.map((product) => {
//       return {
//         params: { path: product.path.toString },
//       };
//     });

//     return {
//       // paths: [ { params: {path: val} }, { params: {path: val} }, { params: {path: val} } ]
//       paths,
//     };
//   } catch (e) {
//     console.error(e);
//   }

//   // return {

//   //   fallback: false,
//   // };
// }
