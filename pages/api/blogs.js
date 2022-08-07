// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

// export default async function handler(req, res) {
//   fs.promises.readdir("blogData", (err, data) => {
//     let allBlogs = [];
//     data.forEach((item) => {
//       fs.readFile("blogData/" + item, "utf-8", (err, jsonData) => {
//         allBlogs.push(jsonData);
//       });
//     });
//     res.status(200).json(allBlogs);
//   });
// }

export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogData");
  let allBlogs = [];
  let myFile;

  for (let i = 0; i < data.length; i++) {
    myFile = await fs.promises.readFile("blogData/" + data[i], "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }
  res.status(200).json(allBlogs);
}
