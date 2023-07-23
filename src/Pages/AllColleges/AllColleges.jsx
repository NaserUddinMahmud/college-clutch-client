import { useLoaderData } from "react-router-dom";
import AllCollegesCard from "./AllCollegesCard";

const AllColleges = () => {
    const colleges = useLoaderData();
    console.log(colleges);
    return (
        <div>
            <div className="mt-4 mb-2">
                <h2 className="text-center text-3xl font-semibold">All Our Colleges</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
                
                {
                    colleges.map(college => <AllCollegesCard
                    key={college._id}
                    college={college}
                    ></AllCollegesCard>)
                }
            </div>
            
        </div>
    );
};

export default AllColleges;