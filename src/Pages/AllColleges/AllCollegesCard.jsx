import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const AllCollegesCard = ({college}) => {
    const {_id,
        college_image,
        college_name,
        college_rating,
        admission_dates,
        research_count,
      } = college;
    return (
        <div className="card w-auto bg-slate-100 shadow-xl mx-auto mb-10">
      <figure className="px-10 pt-10">
        <img src={college_image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{college_name}</h2>
        <div>
    <Rating style={{ maxWidth: 120 }} value={college_rating} readOnly />
    </div>
        <p>
          <span className="font-bold">Admission Dates: </span>
          {admission_dates}
        </p>
        <p>
          <span className="font-bold">Research Conducted: </span>
          {research_count}
        </p>
        

       
        <div className="card-actions">
          <Link to={`/collegeDetails/${_id}`}><button className="btn btn-accent">Details</button></Link>
        </div>
      </div>
    </div>
    );
};

export default AllCollegesCard;