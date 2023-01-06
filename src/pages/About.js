import { useState } from "react";
import { Navigate } from "react-router-dom";
function About() {
  const [user, setUser] = useState("mario");
  console.log(user);

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div>
      <h1>About </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad commodi
        nobis dolore quam labore architecto ab tempora totam eos tenetur
        voluptatum voluptates incidunt eligendi esse asperiores, adipisci
        aliquam dolores quasi!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad commodi
        nobis dolore quam labore architecto ab tempora totam eos tenetur
        voluptatum voluptates incidunt eligendi esse asperiores, adipisci
        aliquam dolores quasi!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad commodi
        nobis dolore quam labore architecto ab tempora totam eos tenetur
        voluptatum voluptates incidunt eligendi esse asperiores, adipisci
        aliquam dolores quasi!
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}

export default About;
