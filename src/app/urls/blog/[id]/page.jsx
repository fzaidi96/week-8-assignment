import LeaveComment from "@/components/LeaveComment";
import { sql } from "@vercel/postgres";

export default async function SingleBlog({params}) {
  
  const blog_post_no = params.id

  const blogs = await sql`SELECT * FROM blog_posts WHERE id = ${blog_post_no}`;
  const comments = await sql`SELECT * FROM comments where post_id = ${blog_post_no}`;
  
    return (
    <div>
      <main className="singleBlog">
        <p>The user can read the blog that they selected here</p>

        <div>
        {blogs.rows.map((blog) => 
        {return (<div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <a>{blog.category}</a></div>)})}</div>
      </main>

      <div className="commentComponent"><LeaveComment /></div> 
    </div> )
}


