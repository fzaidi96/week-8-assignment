import { sql } from "@vercel/postgres";
import Link from "next/link";
import styles from "@/app/page.module.css";
import Image from "next/image";
import hero from "@/../public/hero.JPG";

export const metadata = {
  title: "Blog | silly goose",
};

export default async function Blog() {

  const blogs = await sql`SELECT * FROM blog_posts`

    return (
      <div>
      <main className={styles.blogFeed}>
        <Link href={`blog/4`}><p>featured blog</p></Link>
  
        <div>
          {blogs.rows.map((blog) => {return (<div key={blog.title}>
         <Link href={`/urls/blog/${blog.id}`}><h3>{blog.title}</h3></Link></div>)})}
        </div>

        <Link href="/urls/categories"><h6>or filter by category</h6></Link>
      </main></div>
    )
}