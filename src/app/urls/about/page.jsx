import styles from "@/app/page.module.css";

export const metadata = {
    title: "About Us | silly goose",
  };

export default function About() {
    return (
         <main className={styles.about}>
            <h1>This is the about page</h1>
        </main>
    )
}