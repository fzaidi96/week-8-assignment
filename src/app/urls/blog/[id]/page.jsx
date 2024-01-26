import styles from "@/app/page.module.css";
import LeaveComment from "@/components/LeaveComment";
import { sql } from "@vercel/postgres";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const blog_no = params.id;
  return {
    title: `Blog ${blog_no} | silly goose`,
  }
}
export default async function SingleBlog({params}) {
  
  const blog_no = params.id

  const blogs = await sql`SELECT * FROM blog_posts WHERE id = ${blog_no}`;
  const comments = await sql`SELECT * FROM comments WHERE post_id = ${blog_no}`;
  
    return (
    <div>
      <main className={styles.singleBlog}>
      <ProgressBar />
        <div className={styles.blogText}>
        {blogs.rows.map((blog) => 
        {return (<div key={blog.id}>
          <h2>{blog.title}</h2>
          <Link href={`/urls/categories/${blog.category}`}>#{blog.category}</Link>
          <p>The user can read the blog that they selected here</p>
          <p>{blog.content}</p></div>)})}</div>

          <div className={styles.comments}>
              <LeaveComment blog_no={blog_no}/>
                  <p>---------------------</p>
                    <div>{comments.rows.map((comment) => 
                        {return (<div key={comment.id}>
                          <li>{comment.comment_content}</li>
                      </div>)})}
          </div>
        </div>
      </main>
    </div> )
}


