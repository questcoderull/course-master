import React, { use, useState } from "react";
import { AuthContext } from "../../../contexts/AuthConterxts/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signinUserWithEmailPass } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // Sign in user

    signinUserWithEmailPass(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card bg-base-100 w-full lg:w-11/12 shrink-0 shadow-lg flex-1">
            <div className="card-body py-10">
              <h1 className="text-5xl font-bold">Login Now</h1>
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  required
                />

                {/* Password */}
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="input input-bordered flex items-center justify-between w-full px-3 py-2 gap-2">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Password"
                    className="flex-grow bg-transparent outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-primary cursor-pointer"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {/* showing error message for password */}
                {/* {errorMessage && (
                  <h1 className="mt-4 border p-2 rounded text-red-700">
                    {errorMessage}
                  </h1>
                )} */}

                <button className="btn btn-primary mt-4">Login Now</button>
              </form>

              {/* <SocialLogin></SocialLogin> */}

              <p className="mt-3">
                Don't have an account?{" "}
                <Link className="text-primary underline" to="/SignUp">
                  LogIn
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
