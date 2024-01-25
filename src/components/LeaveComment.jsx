import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function LeaveComment() {
  async function handleLeaveComment(formData) {
    "use server";

    const comment_content = formData.get("comment_comment")

    await sql`INSERT INTO comments (comment_content) VALUES (${comment_content})`}

  return (
    <div>
      <h4>Share your thoughts</h4>
      <form action={handleLeaveComment}>
        <textarea 
        htmlFor="comment_content" name="comment" id="comment" required></textarea>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}
