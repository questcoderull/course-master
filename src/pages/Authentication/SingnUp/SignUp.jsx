import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../../contexts/AuthConterxts/AuthContext";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUserWithEmailPass } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    // Create user with email and password
    createUserWithEmailPass(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card bg-base-100 w-full lg:w-11/12 shrink-0 shadow-lg flex-1">
            <div className="card-body py-10">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <form onSubmit={handleRegister} className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input w-full"
                  placeholder="Name"
                  required
                />

                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  required
                />

                <label className="label">Photo</label>
                <input
                  name="photo"
                  type="text"
                  className="input w-full"
                  placeholder="PhotoURL"
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

                <button className="btn btn-primary mt-4">Register Now</button>
              </form>

              {/* <SocialLogin></SocialLogin> */}

              <p className="mt-3">
                Already have an account?{" "}
                <Link className="text-primary underline" to="/logIn">
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

export default SignUp;
