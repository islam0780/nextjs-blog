import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("posts");
        const { year, content } = req.body;

        const post = await db
            .collection("posts")
            .insertOne({
                year,
                content
            });

        res.json(post);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};