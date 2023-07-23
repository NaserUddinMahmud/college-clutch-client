import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        navigate(from, { replace: true });

        Swal.fire({
          icon: "success",
          title: "Login Successful!",
        });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
    return (
        <div>
            <div className="hero min-h-screen ">
        <div className="hero-content flex-col">
          <div>
            <h1 className="text-5xl font-bold">Please Login !</h1>
          </div>
          <div className="card w-96 shadow-2xl bg-slate-100">
            <form onSubmit={handleLogin}>
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
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-accent mx-8 mb-6"
            >
              <FcGoogle /> <span className="pl-2">Login with Google</span>
            </button>

            <p className="text-red-600 px-10 pb-5">{error}</p>
            <p className="px-10 pb-10">
              New to CollegeClutch?{" "}
              <Link
               to="/register" className=" btn-link">
                Please Sign Up!
              </Link>
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;