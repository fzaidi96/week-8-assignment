import { sql } from "@vercel/postgres";

export default function LeaveComment() {

  async function handleLeaveComment(formData) {
    "use server";
    await sql`INSERT INTO comments (id, comment_content) VALUES ()`}

  return (
    <div>
      <h4>Share your thoughts</h4>
      <form action={handleLeaveComment}>
        <textarea name="comment" id="comment" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
