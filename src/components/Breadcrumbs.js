import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  // console.log(location);

  //goal is to output a template like:
  //if the pathname property of the location is '/help/contact' --> help | contact
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  // console.log(crumbs);

  return <div className="breadcrumbs">{crumbs}</div>;
}

export default Breadcrumbs;
