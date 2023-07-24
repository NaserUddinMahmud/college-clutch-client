import { Link, useLoaderData } from "react-router-dom";


const Admission = () => {
    const colleges = useLoaderData();
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th className="text-center text-xl">College Names</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
        {colleges.map(college =><tr key={college._id} ><td className="text-center text-lg font-medium"><Link className="hover:text-accent" to={`/admissionForm/${college._id}`}>{college.college_name}</Link></td>
       
       </tr>)}
        
      
    </tbody>
  </table>
</div>
    );
};

export default Admission;