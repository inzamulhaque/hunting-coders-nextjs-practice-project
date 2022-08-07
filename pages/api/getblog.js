// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default function handler(req, res) {
  const { slug } = req.query;
  console.log(slug);
  fs.readFile(`blogData/${slug}.json`, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "error" });
    }
    return res.status(200).json(JSON.parse(data));
  });
}
