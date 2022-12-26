import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda
        commodi distinctio cumque eligendi, inventore ullam necessitatibus in
        nobis autem.
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}

export default Page404;
