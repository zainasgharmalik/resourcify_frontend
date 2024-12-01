import { Link } from "react-router-dom"
import { assets } from "../../assets"

const Login = () => {
    return (
        <section className='w-full h-screen'>
            <div className="row w-full h-full flex justify-between items-center gap-[64px]">
                <div className="form-col w-[30%] h-full flex items-center">
                    <form action="" className="flex flex-col gap-[8px] w-full">
                        <div>
                            <h2 className="text-4xl font-clemente-regular">SignIn</h2>
                            <p className="text-left !text-[16px]">Enter Your Email and Password to Login</p>
                        </div>

                        <label htmlFor="">
                            <span className="input-label mb-[4px]">Roll No</span>
                            <input className="" type="text" placeholder="Enter Your Roll Number" />
                        </label>

                        <label className="" htmlFor="">
                            <span className="input-label mb-[4px]">Password</span>
                            <input type="password" placeholder="Enter Your Password" />
                        </label>

                        <Link className="font-gilroy-medium text-right text-text">Forgot Password?</Link>
                        <button className="primary-btn !w-full">Login</button>
                        <p className="!text-[16px]">New Here? <Link className="text-accent font-[600]">Create Account</Link></p>


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
