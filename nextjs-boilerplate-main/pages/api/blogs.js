import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("data");

        const data = await db
            .collection("data")
            .find({})
            .toArray();

        res.json(blogs);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};