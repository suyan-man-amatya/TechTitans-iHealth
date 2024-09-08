import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/web-logo2.png";
import { toast } from "react-toastify";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
// import { FaSquarePhone } from "react-icons/fa";

// Update URL to the patient registration endpoint
const URL = "http://localhost:3000/register-patient";

function SignUp() {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    email: "",
    fullname: "",
    contact: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPatient({
      ...patient,
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
        body: JSON.stringify(patient),
      });
      const res_data = await response.json();
      if (response.ok) {
        toast.success("Registration successful. You can now sign in.");
        setPatient({
          email: "",
          fullname: "",
          contact: "",
          password: "",
        });
        navigate("/signin");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        setPatient({
          email: "",
          fullname: "",
          contact: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during registration.");
    }
  };

  return (
    <div className="box-signup flex-col text-center mt-10">
      <div className="text-area mb-2">Sign up</div>

      <div className="form-area bg-green-400 border-2 ">
        <div className="image-area flex justify-center items-center">
          <img className="Logo-Website h-24 w-24" src={Logo} alt="" />
          <div className="title text-3xl py-4">Welcomes You!</div>
          {/* <div className="description text-base font-semibold">Let's Dive into the World</div> */}
        </div>
        <form className="content-area" onSubmit={handleSubmit}>
          <div className="email flex items-center  border border-green-500 py-1 px-4 mx-4 rounded-md w-56">
            <div>
              <MdEmail />
            </div>
            <input
              className="px-4 w-44 border-none outline-none"
              type="email"
              name="email"
              id="email"
              label="email"
              placeholder="Your E-mail"
              required
              autoComplete="off"
              value={patient.email}
              onChange={handleInput}
            />
          </div>

          <div className="name flex items-center border border-green-500 py-1 px-4 mx-4 rounded-md w-56">
            <div>
              <MdOutlineDriveFileRenameOutline />
            </div>
            <div>
              <input
                className="px-4 w-44 border-none outline-none"
                type="text"
                name="fullname"
                id="fullname"
                label="name"
                autoComplete="off"
                placeholder="Full Name"
                required
                value={patient.fullname}
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="number flex items-center  border border-green-500 py-1 px-4 mx-4 rounded-md w-56">
            <div>{/* <FaSquarePhone /> */}</div>
            <div></div>
            <input
              className="px-4 w-44 border-none outline-none"
              type="tel"
              name="contact"
              id="contact"
              label="contact"
              placeholder="Contact Address"
              required
              autoComplete="off"
              value={patient.contact}
              onChange={handleInput}
            />
            <div />
          </div>

          <div className="password  flex items-center border border-green-500 py-1 px-4 mx-4 rounded-md w-56">
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
                value={patient.password}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="btn-sign">
            <button
              type="submit"
              className="px-3 py-1  rounded-xl bg-green-200 hover:text-blue-500 hover:scale-105 font-light"
            >
              Sign Up
            </button>
          </div>
          <div className="bottom">
            <div className="already font-light py-4">Have an account?</div>
            <div className="login text-green-500 hover:text-blue-500 underline underline-offset-4 py-4">
              <Link to="/signin">Sign In</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
