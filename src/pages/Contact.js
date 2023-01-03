import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";

function Contact() {
  const data = useActionData();
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      {/*action="/help/contact" - here it means, find the action that associated with this route and execute it. */}
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}

export default Contact;

//the function that we fire when the form has submitted. this 'request' prop(object) contains all of the form data
export const contactAction = async ({ request }) => {
  console.log(request);
  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log(submission);

  //send post request

  //if the message length is less that 10 chars, we're gonna show an error message
  if (submission.message.length < 10) {
    //we can access the error message via usaActionData() hook from  the react-router-dom
    return { error: "Message must be over 10 chars long" };
  }

  //if the message length is more that 10 chars, we're gonna redirect the user to the Home page.
  //redirect the user
  return redirect("/");
};
