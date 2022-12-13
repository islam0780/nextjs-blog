import clientPromise from "../../lib/mongodb";
import { ObjectId } from 'mongodb';

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("posts");
        const { id } = req.query;
        const { year, content } = req.body;

        const post = await db
            .collection("posts")
            .updateOne(
                {
                    "_id": ObjectId(id)
                },
                {
                    $set: {
                        "year": year,
                        "content": content
                    }
                }

            );

        res.json(post);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};