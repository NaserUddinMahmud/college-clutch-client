import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";


const Colleges = () => {
    const [colleges, setColleges]  = useState([]);

    useEffect(()=>{
        fetch('colleges.json')
        .then(res =>res.json())
        .then(data => setColleges(data))
    },[])

    return (
        <div>
            <div >
                <h2 className="text-center text-3xl font-semibold">Colleges</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {
                    colleges.map(college => <CollegeCard
                    key={college.college_name}
                    college={college}
                    ></CollegeCard>)
                }
            </div>
            
        </div>
    );
};

export default Colleges;