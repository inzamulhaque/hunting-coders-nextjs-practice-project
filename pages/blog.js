import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";
import * as fs from "fs";

const Blog = (props) => {
  // console.log(props);
  const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((res) => res.json())
  //     .then((data) => setBlogs(data));
  // }, []);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className="blogs">
            {props?.allBlogs?.map((blogItem, index) => {
              return (
                <div key={index}>
                  <Link href={`/blogpost/${blogItem.slug}`}>
                    <h3 className={styles.blogItemh3}>{blogItem.title}</h3>
                  </Link>
                  <p className={styles.blogItemp}>
                    {blogItem.metadesc.substr(0, 140)}...
                  </p>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
};

// export async function getServerSideProps(context) {
//   let data = await fetch("http://localhost:3000/api/blogs");
//   let allBlogs = await data.json();
//   return {
//     props: { allBlogs }, // will be passed to the page component as props
//   };
// }

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogData");
  let allBlogs = [];
  let myFile;

  for (let i = 0; i < data.length; i++) {
    myFile = await fs.promises.readFile("blogData/" + data[i], "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }
  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
