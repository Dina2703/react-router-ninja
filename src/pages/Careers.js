import { useLoaderData, Link } from "react-router-dom";

function Careers() {
  const careers = useLoaderData();
  console.log(careers);
  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

export default Careers;

//loader function
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  return res.json();
};
