import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Mobile No:</span>
          <input type="text" name="mobile" required />
        </label>
        <label>
          <span>Your Message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </Form>

      {data && data.error && <p>{data.error}</p>}
    </div>
  );
}

// action to fire when submitting
export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    mobile: data.get("mobile"),
    message: data.get("message"),
  };

  console.log(submission);

  // send post request
  if (submission.message.length < 10) {
    return { error: "Message must be at least 10 characters" };
  }

  // redirect
  return redirect("/");
};
