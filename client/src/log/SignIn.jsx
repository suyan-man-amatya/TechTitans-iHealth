import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/web-logo2.png";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { toast } from "react-toastify";
import "./form.css";

// Update URL to the patient login endpoint
const URL = "http://localhost:3000/login-patient";

function SignIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      if (response.ok) {
        // Replace with your token storage logic
        localStorage.setItem("token", res_data.token);
        setUser({
          email: "",
          password: "",
        });
        navigate("/pdashboard");
        window.location.reload();
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        setUser({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during login.");
    }
  };

  return (
    <div className="box-signup flex-col text-center mt-10">
      <div className="text-area mb-2">Sign In</div>
      <div className="form-area bg-green-400 border-2 w-96">
        <form className="content-area " onSubmit={handleSubmit}>
          <div className="email flex items-center justify-center border border-green-500  py-1 px-4 mx-4 rounded-2xl w-56 ">
            <div>
              <MdEmail />
            </div>
            <div>
              <input
                className="px-4 w-44 border-none outline-none"
                type="email"
                name="email"
                id="email"
                label="email"
                placeholder="Your E-mail"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="password  flex items-center border border-green-500 py-1 px-4 mx-4 rounded-2xl w-56">
            <div>
              <IoMdLock />
            </div>
            <div>
              <input
                className="px-4 w-44 border-none outline-none"
                type="password"
                name="password"
                id="password"
                label="password"
                placeholder="Password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="btn-sign">
            <button
              type="submit"
              className="px-3 py-1 my-2 rounded-xl bg-green-200 hover:text-blue-500 hover:scale-105 font-light"
            >
              Sign In
            </button>
          </div>
          <div className="bottom">
            <div className="already font-light">Don't have an account?</div>
            <div className="login text-green-500 hover:text-blue-500 underline underline-offset-4">
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>

          <div className="sign-in-profile flex justify-between px-16 pt-4 gap-7">
            <div className="btn-sign">
              <button
                type="submit"
                className="px-3 py-1 my-2 rounded-xl bg-blue-300 hover:text-green-700 hover:scale-105 font-medium text-white"
              >
                <Link to="/docsignup"> Doctor</Link>
              </button>
            </div>
            <div className="btn-sign">
              <button
                type="submit"
                className="px-3 py-1 my-2 rounded-xl bg-blue-300 hover:text-green-700 hover:scale-105 font-medium text-white"
              >
                <Link to="/adminsignup">Admin</Link>
              </button>
            </div>
            <div className="btn-sign">
              <button
                type="submit"
                className="px-3 py-1 my-2 rounded-xl bg-blue-300 hover:text-green-700 hover:scale-105 font-medium text-white"
              >
                <Link to="/pharmasignup">Pharmacist</Link>
              </button>
            </div>
          </div>
        </form>
        <div className="image-area">
          <img className="Logo-Website h-24 w-24" src={Logo} alt="" />
          <div className="title text-3xl py-4">Welcomes You!</div>
          <div className="description text-base font-semibold">
            Let's Dive into the World
          </div>
          <div className="image">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
