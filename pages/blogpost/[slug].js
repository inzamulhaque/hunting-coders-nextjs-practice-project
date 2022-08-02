import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Title of this page: {slug}</h1>
          <hr />
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium, excepturi sunt. Voluptate possimus laboriosam,
            consequuntur minus expedita optio sapiente dolor? Numquam, eius et.
          </div>
        </main>
      </div>
    </>
  );
};

export default slug;
