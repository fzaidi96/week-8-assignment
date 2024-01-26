import { sql } from "@vercel/postgres";
import Link from "next/link";
import styles from "@/app/page.module.css";

export const metadata = {
  title: "Blog Categories | silly goose",
};

export default async function categoryPage () {

const blogs = await sql`SELECT * FROM blog_posts`
const categories = await sql`SELECT * FROM categories`

    return <div>
    <main className={styles.blogFeed}>
      <h2>Categories</h2>
        <div>
          {categories.rows.map((category) => {return (<div key={category.id}>
         <Link href={`/urls/categories/${category.name}`}><h3>{category.name}</h3></Link></div>)})}
        </div>
        <Link href="/urls/blog"><h6>go back to all blogs</h6></Link>
      </main>
    </div>
}