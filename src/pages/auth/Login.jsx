import { Link } from "react-router-dom";
import { assets } from "../../assets";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/user";
import { useState } from "react";

const Login = () => {
  const [identifier, setIdentifier] = useState(""); // Unified field for rollNo or email
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const formatRollNo = (value) => {
    // Remove all non-alphanumeric characters
    const cleanValue = value.replace(/[^a-z0-9]/gi, "").toLowerCase();

    // Dynamically add dashes
    if (cleanValue.length <= 4) {
      return cleanValue;
    } else if (cleanValue.length <= 7) {
      return `${cleanValue.slice(0, 4)}-${cleanValue.slice(4)}`;
    } else if (cleanValue.length <= 10) {
      return `${cleanValue.slice(0, 4)}-${cleanValue.slice(
        4,
        7
      )}-${cleanValue.slice(7)}`;
    } else {
      return `${cleanValue.slice(0, 4)}-${cleanValue.slice(
        4,
        7
      )}-${cleanValue.slice(7, 10)}`;
    }
  };

  const handleIdentifierChange = (e) => {
    const value = e.target.value;

    // Check if value matches roll number format
    const isRollNo =
      /^[a-z]{2}\d{2}-[a-z]{3}-\d{3}$/i.test(value) ||
      value.replace(/[^a-z0-9]/gi, "").length <= 10;

    if (isRollNo) {
      setIdentifier(formatRollNo(value)); // Format as roll number
    } else {
      setIdentifier(value); // Keep as email
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(identifier, password)); // Dispatch unified identifier (rollNo or email)
  };

  return (
    <section className="w-full h-screen">
      <div className="row w-full h-full flex justify-between items-center gap-[64px]">
        <div className="form-col w-[30%] h-full flex items-center">
          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-[8px] w-full"
          >
            <div>
              <h2 className="text-4xl font-clemente-regular">SignIn</h2>
              <p className="text-left !text-[16px]">
                Enter Your Roll Number (Students) or Email (Others) and Password
                to Login
              </p>
            </div>

            <label>
              <span className="input-label mb-[4px]">Roll No / Email</span>
              <input
                value={identifier}
                onChange={handleIdentifierChange}
                className=""
                type="text"
                placeholder="Enter Your Roll Number or Email"
                maxLength={50} // Increase length to accommodate email addresses
              />
            </label>

            <label>
              <span className="input-label mb-[4px]">Password</span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Your Password"
              />
            </label>

            <Link className="text-right font-gilroy-medium text-text">
              Forgot Password?
            </Link>
            <button className="primary-btn !w-full">Login</button>
            <p className="!text-[16px]">
              New Here?{" "}
              <Link className="text-accent font-[600]">Create Account</Link>
            </p>
          </form>
        </div>
        <div className="image-col w-[70%] h-full">
          <img
            className="w-full h-full rounded-lg"
            src={assets.comsats_wah}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
