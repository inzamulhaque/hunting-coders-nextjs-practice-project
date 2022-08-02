import React from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className="blogs">
            <div>
              <Link href={`/blogpost/learn-javascript`}>
                <h3 className={styles.blogItemh3}>
                  How to learn JavaScript in 2022?
                </h3>
              </Link>
              <p>
                JavaScript is the language used to design logic for the web.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                error voluptatum impedit!
              </p>
            </div>
            <div className="blogItem">
              <h3>How to learn JavaScript in 2022?</h3>
              <p>
                JavaScript is the language used to design logic for the web.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                error voluptatum impedit!
              </p>
            </div>
            <div className="blogItem">
              <h3>How to learn JavaScript in 2022?</h3>
              <p>
                JavaScript is the language used to design logic for the web.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                error voluptatum impedit!
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Blog;
