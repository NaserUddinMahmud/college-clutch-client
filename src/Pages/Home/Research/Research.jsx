import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Research = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("colleges.json")
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
              {colleges.map((college, index) => (
                <tr key={index} className="hover">
                  <td>{college.college_name}</td>
                  <td>
                    {college.research_works.map((work, index) => (
                      <Link key={index}><li>{work}</li></Link>
                    ))}
                  </td>
                  <td>{college.research_paper_links.map((work, index) => (
                      <li key={index}>{work}</li>
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
