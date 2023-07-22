import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
        <div className="hero-content flex-col">
          <div>
            <h1 className="text-5xl font-bold">Please Login !</h1>
          </div>
          <div className="card w-96 shadow-2xl bg-slate-100">
            <form onSubmit=''>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
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
                  />
                  
                </div>
                <div className="form-control mt-5">
                  <button className="btn btn-accent">Login</button>
                </div>
              </div>
            </form>

            <button
              onClick=''
              className="btn btn-outline btn-accent mx-8 mb-6"
            >
              <FcGoogle /> <span className="pl-2">Login with Google</span>
            </button>

            <p className="text-red-600 px-10 pb-5"></p>
            <p className="px-10 pb-10">
              New to ActionCon?{" "}
              <Link
               to="/register" className=" btn-link">
                Please register!
              </Link>
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;