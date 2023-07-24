import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Research = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  return (
    <div>
      <div className="mt-4 mb-2">
        <h2 className="text-center text-3xl font-semibold">
          Researches of Our College Students
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table mx-10">
            {/* head */}
            <thead>
              <tr>
                <th>College Name</th>
                <th>Research Topic</th>
                <th>Research Link</th>
              </tr>
            </thead>
            <tbody>
              {/* row 2 */}
              {colleges.map((college) => (
                <tr key={college._id} className="hover">
                  <td>{college.college_name}</td>
                  <td>
                    {college.research_works.map((work, index) => (
                         <li key={index}>{work}</li>

                      
                    ))}
                  </td>
                  <td>{college.research_paper_links.map((work, index) => (
                      <Link className="link link-primary hover:link-accent" key={index}><li className="list-none">{work}</li></Link>
                    ))}</td>
                </tr>
              ))}
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Research;
