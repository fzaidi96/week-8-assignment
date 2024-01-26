import { sql } from "@vercel/postgres";
import Link from "next/link";
import styles from "@/app/page.module.css";

export const metadata = {
  title: "Blog Categories | silly goose",
};

export default async function categoryPage () {

const blogs = await sql`SELECT * FROM blog_posts`

    return <div>
    <main className={styles.blogFeed}>
      <h2>Categories</h2>
        <div>
          {blogs.rows.map((blog) => {return (<div key={blog.category}>
         <Link href={`/urls/categories/${blog.category}`}><h3>{blog.category}</h3></Link></div>)})}
        </div>
        <Link href="/urls/blog"><h6>go back to all blogs</h6></Link>
      </main>
    </div>
}