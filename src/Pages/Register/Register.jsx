import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div>
            <h1 className="text-5xl font-bold">Please Register !</h1>
          </div>
          <div className="card w-96 shadow-2xl bg-slate-100">
            <form onSubmit='{handleRegister}'>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' className="file-input file-input-ghost file-input-bordered w-full max-w-xs px-5" />
        </div>
                  <label className="label"></label>
                </div>
                <p className='text-red-600 '></p>
                <div className="form-control mt-2">
                  <button className="btn btn-accent">Register</button>
                </div>
              </div>
            </form>
            
            <button onClick='{handleGoogleSignIn}' className="btn btn-outline btn-accent mb-6 mx-8">
              {" "}
              <FcGoogle /> <span className="pl-2">Login with Google</span>
            </button>

            <p className="text-red-600 px-5"></p>
            <p className="px-10 pb-10">
              Already have an account?{" "}
              <Link to="/login" className=" btn-link">
                Please Login!
              </Link>
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;