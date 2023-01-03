import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

function CareersDetails() {
  const { id } = useParams();
  console.log(id); //just to show that we can acces route param using useParams()
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ullam
          ipsa iure saepe vel quam veniam quos dignissimos, odio beatae?
        </p>
      </div>
    </div>
  );
}

export default CareersDetails;

//loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  return res.json();
};
