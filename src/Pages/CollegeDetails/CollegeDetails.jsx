import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
  const college = useLoaderData();
  const {
    college_image,
    college_name,
    admission_process,
    events_details,
    research_works,
    sports_categories,
  } = college;
  return (
    <div className="hero ">
      <div className="hero-content flex-col ">
        <img src={college_image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-center text-3xl font-bold">{college_name}</h1>
          <p className="my-2 py-2 text-center">
            <span className="font-bold">Admission Process:</span>{" "}
            {admission_process}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center my-4">
            <div className="my-3">
              <span className="font-bold">Events Details: </span>
              <ul className="px-8">
                {events_details.map((events_detail, index) => (
                  <li className="list-disc " key={index}>
                    {events_detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="my-3">
              <span className="font-bold">Research Works: </span>
              <ul className="px-8">
                {research_works.map((research_work, index) => (
                  <li className="list-disc " key={index}>
                    {research_work}
                  </li>
                ))}
              </ul>
            </div>

            <div className="my-3">
              <span className="font-bold">Sports Facilities: </span>
              <ul className="px-8">
                {sports_categories.map((category, index) => (
                  <li className="list-disc " key={index}>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
