import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  // Validate the request method
  if (req.method !== "GET") {
    res.status(405).send({ message: "Only GET requests allowed" });
    return;
  }

  try {
    const client = await clientPromise;
    const db = client.db("optimus_battery");

    const products = await db.collection("products").find().toArray();

    res.status(200).json(products);
  } catch (e) {
    console.error(e);
  }
};
