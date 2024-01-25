import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Blog() {

  const blogs = await sql`SELECT * FROM blog_posts`

    return (
        <main className="blogpage">
        <p>The user sees the list of blogs here</p>
        <div className="blogs">
          {blogs.rows.map((blog) => {return (<div key={blog.title} className="title">
         <Link href="/"><h3>{blog.title}</h3></Link></div>)})}
        </div>
      </main>
    )
}

