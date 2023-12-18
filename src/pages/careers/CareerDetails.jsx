import { useParams, useLoaderData } from "react-router-dom";

export const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for: {career.title}</h2>
      <p>Starting salary: ${career.salary}</p>
      <p>Location: {career.location}</p>
    </div>
  );
};

// loader function for job details
export const CareerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:5000/careers/` + id);

  return res.json();
};
