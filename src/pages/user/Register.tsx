import { useState, useEffect, type ChangeEvent, type SubmitEvent } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { registerUser } from "../../store/authSlice"
import { Status } from "../../globals/types/type"
import { Link, useNavigate } from "react-router-dom"
import background from '../../media/background1.png'
import email from '../../media/email.png'
import lock from '../../media/lock.png'
import hide from '../../media/hide.png'
import expose from '../../media/expose.png'
import register from '../../media/register.png'
import userR from '../../media/userR.png'

function Register() {
    const { status } = useAppSelector((store) => store.auth)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [data, setData] = useState({
        username: "",
        password: "",
        email: ""
    })
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(registerUser(data))
    }
    useEffect(() => {
        if (status === Status.SUCCESS) {
            navigate("/login")
        } else if (status === Status.ERROR) {
            alert("Something went wrong")
        }
    }, [status])

    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            className="h-screen w-full flex items-center justify-center p-4 overflow-y-auto font-sans"
        >
            {/* WRAPPER */}
            <div className="relative w-full max-w-85 sm:max-w-sm">

                {/* Soft halo glow behind the card */}
                <div className="absolute inset-0 -m-6 rounded-[2.5rem] bg-white/40 blur-2xl"></div>

                {/* CARD */}
                <div className="relative w-full bg-linear-to-b from-[#dff2ff] via-white to-white shadow-[0_10px_40px_rgb(0,0,0,0.10)] rounded-[1.75rem] sm:rounded-4xl px-5 py-6 sm:px-9 sm:py-9">

                    {/* Top Icon */}
                    <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-3 sm:mb-4 border border-gray-100">
                        <img className="h-4 w-4 sm:h-5 sm:w-5 opacity-80" src={register} alt="Login Icon" />
                    </div>

                    {/* Headings */}
                    <div className="text-center mb-5 sm:mb-6">
                        <h2 className="text-base sm:text-xl font-bold tracking-tight text-gray-900 mb-1.5">
                            Create your account
                        </h2>
                        <p className="text-[11px] sm:text-xs text-gray-500 font-medium px-1 leading-relaxed">
                            Sign up to access your cart, track orders, and discover products.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-2.5 sm:space-y-3" onSubmit={handleSubmit}>

                        {/* Username Input Box */}
                        <div>
                            <div className="flex items-center bg-gray-50 rounded-xl px-3 py-2 sm:py-2.5 border border-gray-200 focus-within:border-sky-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-sky-100 transition-all">
                                <img src={userR} alt="Email" className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-40 mr-2.5" />
                                <input
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    required
                                    className="bg-transparent w-full focus:outline-none text-gray-700 text-xs sm:text-sm"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Email Input Box */}
                        <div>
                            <div className="flex items-center bg-gray-50 rounded-xl px-3 py-2 sm:py-2.5 border border-gray-200 focus-within:border-sky-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-sky-100 transition-all">
                                <img src={email} alt="Email" className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-40 mr-2.5" />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    required
                                    className="bg-transparent w-full focus:outline-none text-gray-700 text-xs sm:text-sm"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Password Input Box */}
                        <div>
                            <div className="flex items-center bg-gray-50 rounded-xl px-3 py-2 sm:py-2.5 border border-gray-200 focus-within:border-sky-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-sky-100 transition-all">
                                <img src={lock} alt="Lock" className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-40 mr-2.5" />
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    autoComplete="new-password"
                                    required
                                    className="bg-transparent w-full focus:outline-none text-gray-700 text-xs sm:text-sm"
                                    onChange={handleChange}
                                />
                                <img
                                    src={showPassword ? expose : hide}
                                    alt="Toggle Password Visibility"
                                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-40 ml-2 cursor-pointer hover:opacity-70 transition-opacity"
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-xl bg-[#1c1c1e] py-2 sm:py-2.5 px-4 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-black focus:outline-none transition-all duration-200"
                            >
                                Register Account
                            </button>
                        </div>
                    </form>

                    {/* Login Link */}
                    <div className="pt-5 sm:pt-6 text-center">
                        <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
                            Already have an account?{' '}
                            <Link to="/login" className="text-black font-bold hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register