import styles from "@/app/page.module.css";
import { sql } from "@vercel/postgres";
import Link from "next/link";


export async function generateMetadata({ params }) {
  const category = params.id;
  return {
    title: `${category} blogs | silly goose`,
  }
}

export default async function chosenCategory({params}) {
    
    const category = params.id;
    const blogs = await sql`SELECT * FROM blog_posts WHERE category =${category}`;
  
    return (
        <div>
            <main className={styles.blogFeed}>
            <p>{category}</p>
            <div>{blogs.rows.map((blog) => {return (<div key={blog.id}>
                <Link href={`/urls/blog/${blog.id}`}><h3>{blog.title}</h3></Link></div>)})}</div>
                <Link href="/urls/categories"><h6>go back to all categories</h6></Link>
        </main>
        </div>
       
     )
}