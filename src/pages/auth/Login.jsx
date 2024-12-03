import { Link } from "react-router-dom"
import { assets } from "../../assets"
import { useDispatch } from "react-redux"
import { login } from "../../redux/actions/user"
import { useState } from "react"

const Login = () => {
    const [rollNo, setRollNo] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const formatRollNo = (value) => {
        // Remove all non-alphanumeric characters
        const cleanValue = value.replace(/[^a-z0-9]/gi, "").toLowerCase()

        // Dynamically add dashes
        if (cleanValue.length <= 4) {
            return cleanValue
        } else if (cleanValue.length <= 7) {
            return `${cleanValue.slice(0, 4)}-${cleanValue.slice(4)}`
        } else if (cleanValue.length <= 10) {
            return `${cleanValue.slice(0, 4)}-${cleanValue.slice(4, 7)}-${cleanValue.slice(7)}`
        } else {
            return `${cleanValue.slice(0, 4)}-${cleanValue.slice(4, 7)}-${cleanValue.slice(7, 10)}`
        }
    }

    const handleRollNoChange = (e) => {
        const formattedValue = formatRollNo(e.target.value)
        setRollNo(formattedValue)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(rollNo, password))
    }

    return (
        <section className='w-full h-screen'>
            <div className="row w-full h-full flex justify-between items-center gap-[64px]">
                <div className="form-col w-[30%] h-full flex items-center">
                    <form onSubmit={submitHandler} className="flex flex-col gap-[8px] w-full">
                        <div>
                            <h2 className="text-4xl font-clemente-regular">SignIn</h2>
                            <p className="text-left !text-[16px]">Enter Your Roll Number and Password to Login</p>
                        </div>

                        <label>
                            <span className="input-label mb-[4px]">Roll No</span>
                            <input
                                value={rollNo}
                                onChange={handleRollNoChange}
                                className=""
                                type="text"
                                placeholder="Enter Your Roll Number"
                                maxLength={12} // Limit the input to 12 characters (fa22-bse-073)
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

                        <Link className="font-gilroy-medium text-right text-text">Forgot Password?</Link>
                        <button className="primary-btn !w-full">Login</button>
                        <p className="!text-[16px]">
                            New Here? <Link className="text-accent font-[600]">Create Account</Link>
                        </p>
                    </form>
                </div>
                <div className="image-col w-[70%] h-full">
                    <img className="h-full w-full rounded-lg" src={assets.comsats_wah} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Login
