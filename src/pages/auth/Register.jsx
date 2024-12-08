import { Link } from "react-router-dom";
import { assets } from "../../assets";
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/actions/user";
import { useState } from "react";
import Select from "react-select"
import { styles } from "../../utils/selectStyles";
import { genderOptions, roleOptions } from "../../utils/selectOptions";
const Register = () => {
    const [role, setRole] = useState("")
    const [name, setName] = useState("")
    const [rollNo, setRollNo] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(identifier, password));
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
                            <h2 className="text-4xl font-clemente-regular">Create Account</h2>
                            <p className="text-left !text-[16px]">
                                Enter Your Email and Password to Login
                            </p>
                        </div>


                        <label>
                            <span className="input-label mb-[4px]">Role</span>
                            <Select value={role} onChange={setRole} placeholder="Choose Roles" options={roleOptions} styles={styles}
                            />
                        </label>

                        <label>
                            <span className="input-label mb-[4px]">Name</span>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Enter Your Name"

                            />
                        </label>

                        <label className={role.value === "student" ? "visible" : "hidden"}>
                            <span className="input-label mb-[4px]">Roll No</span>
                            <input
                                value={rollNo}
                                onChange={(e) => setRollNo(e.target.value)}
                                className=""
                                type="text"
                                placeholder="Enter Your Email"
                                maxLength={50} // Increase length to accommodate email addresses
                            />
                        </label>



                        <label>
                            <span className="input-label mb-[4px]">Email</span>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className=""
                                type="text"
                                placeholder="Enter Your Email"
                                maxLength={50} // Increase length to accommodate email addresses
                            />
                        </label>


                        <label>
                            <span className="input-label mb-[4px]">Gender</span>
                            <Select value={gender} onChange={setRole} placeholder="Choose Gender" options={genderOptions} styles={styles}
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


                        <button className="primary-btn !w-full">Create Account</button>
                        <p className="!text-[16px] text-center">
                            Already have account?{" "}
                            <Link to={`/login`} className="text-accent font-[600]">Login</Link>
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

export default Register;
