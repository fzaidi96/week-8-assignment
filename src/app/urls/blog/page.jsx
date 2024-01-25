import { sql } from "@vercel/postgres";
import Link from "next/link";
import styles from "@/app/page.module.css";

export default async function Blog() {

  const blogs = await sql`SELECT * FROM blog_posts`

    return (
      <main className={styles.blogFeed}>
        
        <div className="blogs">
          {blogs.rows.map((blog) => {return (<div key={blog.title} className="title">
         <Link href={`/urls/blog/${blog.id}`}><h3>{blog.title}</h3></Link></div>)})}
        </div>

      </main>
    )
}