import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const slug = (props) => {
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

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Title of this page: {props?.blog?.title}</h1>
          <hr />
          <div>{props?.blog?.content}</div>
        </main>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data, blog;
  if (slug) {
    data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    blog = await data.json();
  }

  return {
    props: { blog }, // will be passed to the page component as props
  };
}

export default slug;
