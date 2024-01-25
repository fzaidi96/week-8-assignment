import { sql } from "@vercel/postgres";
import Link from "next/link";
import styles from "@/app/page.module.css";
import Image from "next/image";
import hero from "@/../public/hero.JPG";

export default async function Blog() {

  const blogs = await sql`SELECT * FROM blog_posts`

    return (
      <main className={styles.blogFeed}>
        <Link href={`blog/4`}><p>featured post</p></Link>
  
        <div>
          {blogs.rows.map((blog) => {return (<div key={blog.title}>
         <Link href={`/urls/blog/${blog.id}`}><h3>{blog.title}</h3></Link></div>)})}
        </div>
        
      </main>
    )
}