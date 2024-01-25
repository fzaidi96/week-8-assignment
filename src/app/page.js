import Image from "next/image";
import styles from "./page.module.css";
import hero from "@/../public/hero.JPG";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>This is the home page of the blog</h1>
      <p>insert hero image</p>
      <p>insert other homepage content maybe cta</p>
    </main>
  );
}
