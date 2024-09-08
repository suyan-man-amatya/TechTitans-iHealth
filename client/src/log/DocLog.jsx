import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./form.css";
import Logo from "../assets/web-logo2.png";
import { toast } from "react-toastify";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";

// Backend URL for doctor login
const URL = "http://localhost:3000/login-doctor"; // Update this to your backend URL

function DocLog() {
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
        localStorage.setItem("token", res_data.token);
        toast.success("Login successful!");
        setUser({ email: "", password: "" });
        navigate("/ddashboard"); // Redirect to doctor dashboard
      } else {
        toast.error(res_data.message || "Login failed");
        setUser({ email: "", password: "" });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="box-signup flex-row text-center mt-24">
      <div className="form-area bg-green-400 border-2">
        <form className="content-area" onSubmit={handleSubmit}>
          <div className="text-areaa mb-2 text-3xl font-normal text-green-500">
            Hi Doctor!
          </div>
          <div className="email flex items-center border border-blue-500 py-1 px-4 mx-4 rounded-2xl w-56">
            <div>
              <MdEmail />
            </div>
            <div>
              <input
                className="px-4 w-44 border-none outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Your E-mail"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="password flex items-center border border-blue-500 py-1 px-4 mx-4 rounded-2xl w-56">
            <div>
              <IoMdLock />
            </div>
            <div>
              <input
                className="px-4 w-44 border-none outline-none"
                type="password"
                name="password"
                id="password"
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
              className="px-3 py-1 my-2 rounded-xl bg-blue-300 hover:text-blue-500 hover:scale-105 font-light"
            >
              Sign In
            </button>
          </div>
          <div className="default-login font-medium text-blue-500 underline hover:text-green-500">
            <Link to="/signin">{"<<Back"}</Link>
          </div>
        </form>
        <div className="image-area">
          <img className="Logo-Website h-24 w-24" src={Logo} alt="Logo" />
          <div className="title text-3xl py-4">Welcomes You!</div>
          <div className="description text-base font-semibold">
            Let's Dive into the World
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocLog;
