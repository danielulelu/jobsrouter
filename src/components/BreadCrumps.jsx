// Making breadcrumbs from the current state using location hook.

import { Link, useLocation } from "react-router-dom";

export const BreadCrumps = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = +`/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

    return (
      <div className="breadcrumbs">
        {crumbs}
      </div>
    )
};
