import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import SaveCommentButton from "./SaveCommentButton";

export default function LeaveComment({blog_no}) {

  async function handleLeaveComment(formData) {
    "use server";

    const comment = formData.get("comment")
    await sql`INSERT INTO comments(post_id, comment_content) VALUES (${blog_no},${comment})`;
  
    revalidatePath(`/urls/blog/${blog_no}`);
    redirect(`/urls/blog/${blog_no}`);
    }

    return (
    <div>
      <h4>Share your thoughts</h4>
      <form action={handleLeaveComment}>
        <textarea name="comment" id="comment"required></textarea>
        <SaveCommentButton />
      </form>
    </div>
  );

}
