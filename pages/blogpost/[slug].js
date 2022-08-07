import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import * as fs from "fs";

const Slug = (props) => {
  // const router = useRouter();
  // const [blog, setBlog] = useState({});

  // useEffect(() => {
  //   const { slug } = router.query;
  //   if (slug) {
  //     fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //       .then((res) => res.json())
  //       .then((data) => setBlog(data));
  //   }
  // }, [router.isReady]);

  function createMarkup(HTML) {
    return { __html: HTML };
  }

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Title of this page: {props?.blog?.title}</h1>
          <hr />
          {props.blog && (
            <div dangerouslySetInnerHTML={createMarkup(props?.blog?.content)} />
          )}
        </main>
      </div>
    </>
  );
};

// export async function getServerSideProps(context) {
//   const { slug } = context.query;
//   let data, blog;
//   if (slug) {
//     data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//     blog = await data.json();
//   }

//   return {
//     props: { blog }, // will be passed to the page component as props
//   };
// }

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogData/${slug}.json`);

  return {
    props: { blog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}

export default Slug;
