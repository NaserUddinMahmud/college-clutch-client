import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const {_id,
    college_image,
    college_name,
    admission_dates,
    events,
    research_count,
    sports_categories,
  } = college;
  return (
    <div className="card w-auto bg-slate-100 shadow-xl mx-auto mb-10">
      <figure className="px-10 pt-10">
        <img src={college_image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{college_name}</h2>
        <p>
          <span className="font-bold">Admission Dates: </span>
          {admission_dates}
        </p>
        <p>
          <span className="font-bold">Research Conducted: </span>
          {research_count}
        </p>
        <div>
          <span className="font-bold">Events: </span>
          <ul>
            {events.map((event, index) => (
              <li className="list-disc" key={index}>
                {event}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="font-bold">Sports Facilities: </span>
          <ul>
            {sports_categories.map((category, index) => (
              <li className="list-disc " key={index}>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-actions">
          <Link to={`/collegeDetails/${_id}`}><button className="btn btn-accent">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
