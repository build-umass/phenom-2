import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db();
  const page = await db
    .collection("pages")
    .findOne({
      pageID: req.query.pageId
    })
  res.json(page);
};
