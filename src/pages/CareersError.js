import { Link, useRouteError } from "react-router-dom";

function CareersError() {
  //you can catch whatever error message you have set (inside careerDetailsLoader func) usinf useRouteError()
  const error = useRouteError();
  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
}

export default CareersError;
