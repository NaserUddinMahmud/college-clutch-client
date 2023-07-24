import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const MyCollege = () => {
  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState([]);

  const url = `https://college-clutch-server.vercel.app/booking?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data[0]));
  }, [url]);

  console.log(booking);

  return (
    <>
      
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={booking.photo} className="max-w-xs rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">{booking.candidateName}</h1>
            <p className="my-2 py-1 text-left">
              <span className="font-bold">subject:</span> {booking.subject}
            </p>
            <p className="my-2 py-1 text-left">
              <span className="font-bold">birthDate:</span> {booking.birthDate}
            </p>
            <p className="my-2 py-1 text-left">
              <span className="font-bold">email :</span> {booking.email}
            </p>
            <p className="my-2 py-1 text-left">
              <span className="font-bold">phone :</span> {booking.phone}
            </p>
            <p className="my-2 py-1 text-left">
              <span className="font-bold">address :</span> {booking.address}
            </p>
           
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      


      {/* <div className="hero ">
      <div className="hero-content flex-col ">
        <img src={booking.college
?.college_image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-center text-3xl font-bold">{booking?.college
.college_name}</h1>
          <p className="my-2 py-2 text-center">
            <span className="font-bold">Admission Process:</span>{" "}
            {booking?.college
.admission_process}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center my-4">
            <div className="my-3">
              <span className="font-bold">Events Details: </span>
              <ul className="px-8">
                {booking?.college
.events_details.map((events_detail, index) => (
                  <li className="list-disc " key={index}>
                    {events_detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="my-3">
              <span className="font-bold">Research Works: </span>
              <ul className="px-8">
                {booking?.college
.research_works.map((research_work, index) => (
                  <li className="list-disc " key={index}>
                    {research_work}
                  </li>
                ))}
              </ul>
            </div>

            <div className="my-3">
              <span className="font-bold">Sports Facilities: </span>
              <ul className="px-8">
                {booking?.college
.sports_categories.map((category, index) => (
                  <li className="list-disc " key={index}>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default MyCollege;
