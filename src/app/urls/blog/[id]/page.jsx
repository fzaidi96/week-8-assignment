import styles from "@/app/page.module.css";
import LeaveComment from "@/components/LeaveComment";
import { sql } from "@vercel/postgres";

export default async function SingleBlog({params}) {
  
  const blog_no = params.id

  const blogs = await sql`SELECT * FROM blog_posts WHERE id = ${blog_no}`;
  const comments = await sql`SELECT * FROM comments where post_id = ${blog_no}`;
  
    return (
    <div>
      <main className={styles.singleBlog}>

        <div className={styles.blogText}>
        {blogs.rows.map((blog) => 
        {return (<div key={blog.id}>
          <h2>{blog.title}</h2>
          <a href="/"className={styles.categoryTags}>#{blog.category}</a>
          <p>The user can read the blog that they selected here</p>
          <p>{blog.content}</p></div>)})}</div>

          <div className={styles.comments}>
              <LeaveComment />
              <p>---------------------</p>
              <div>{comments.rows.map((comment) => 
                    {return (<li key={comment.id}>{comment.comment_content}</li>)})}</div>
          </div>
      </main>

    </div> )
}


