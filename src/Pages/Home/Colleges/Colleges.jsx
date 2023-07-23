import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";


const Colleges = () => {
    const [colleges, setColleges]  = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/colleges')
        .then(res =>res.json())
        .then(data => setColleges(data))
    },[])

    return (
        <div>
            <div className="mt-4 mb-2">
                <h2 className="text-center text-3xl font-semibold">Colleges</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
                
                {
                    colleges.slice(0, 3).map(college => <CollegeCard
                    key={college._id}
                    college={college}
                    ></CollegeCard>)
                }
            </div>
            
        </div>
    );
};

export default Colleges;