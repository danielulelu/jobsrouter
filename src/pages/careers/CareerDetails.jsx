import { useLoaderData } from "react-router-dom";

export const CareerDetails = () => {
  const handleClick = () => {
    console.log("I want to go back boy!")
  };

  const career = useLoaderData();
  return (
    <>
      <div className="career-details">
        <h2>Career Details for: {career.title}</h2>
        <p>Starting salary: ${career.salary}</p>
        <p>Location: {career.location}</p>
      </div>
      <button type="submit" onClick={handleClick} >Go Back</button>
    </>
  );
};

// loader function for job details
export const CareerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:5000/careers/` + id);

  if (!res.ok) {
    throw Error(`Error fetching the jobs`);
  }

  return res.json();
};
