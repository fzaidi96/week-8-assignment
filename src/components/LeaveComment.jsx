import { sql } from "@vercel/postgres";

export default async function LeaveComment() {

  return (
    <div>
    
      <h4>Share your thoughts</h4>
      <form>
        <textarea id="comment" name="comment" required></textarea>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}
