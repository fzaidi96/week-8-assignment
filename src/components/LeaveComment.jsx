"use client";
import { useFormStatus } from "react-dom";

export default function LeaveComment() {
    const { pending } = useFormStatus();

  return (
    <div>
      <h4>Share your thoughts</h4>
      <form>
        <textarea id="comment" name="comment" required></textarea>
        <button type="submit" disabled={pending} className={pending ? "disabled" : ""}>
          {pending ? "Adding your comment" : "Submit"}</button>
      </form>
      
    </div>
  );
}
