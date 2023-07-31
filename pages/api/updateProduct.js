import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { _id, price } = req.body;

  if (!_id || !price) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("optimus_battery");

    const objectId = new ObjectId(_id);

    const updatedProduct = await db
      .collection("products")
      .findOneAndUpdate(
        { _id: objectId },
        { $set: { price: price } },
        { returnOriginal: false }
      );

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
