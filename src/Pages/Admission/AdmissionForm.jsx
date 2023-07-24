import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const AdmissionForm = () => {
  const college = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, college_name } = college;

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const subject = form.subject.value;
    const email = user?.email;
    const phone = form.phone.value;
    const birthDate = form.birthDate.value;
    const photo = form.photo.value;
    const address = form.address.value;

    const booking = {
        candidateName: name,
        subject,
        collegeId: _id,
        email,
        phone,
        birthDate,
        photo,
        address
    }

    console.log(booking);
  }
  return (
    <div className=" px-24 pb-8">
      <h2 className="text-3xl font-bold text-center mb-5">{college_name}</h2>

      <form onSubmit={handleSubmit}>
        {/* row */}
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Candidate Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Subject</span>
            </label>
            <input
              type="text"
              name="subject"
              placeholder="subject"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* row */}
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={user?.email}
              placeholder="email"
              className="input input-bordered w-full"
              readOnly
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label" htmlFor="dropdown">
              <span className="label-text font-medium">Phone Number</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="phone number"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* row */}
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Date of Birth</span>
            </label>
            <input
              type="date"
              name="birthDate"
              placeholder="date of birth"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo URL"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* row */}
        <div className="md:flex justify-center gap-10 mb-10">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text font-medium">Address</span>
            </label>
            <textarea
              type="text"
              name="address"
              placeholder="address"
              className="textarea textarea-bordered w-full"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Submit"
            className="btn btn-wide btn-accent font-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
