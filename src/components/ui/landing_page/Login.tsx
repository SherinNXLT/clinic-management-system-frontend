import { useState } from "react";
import CommonInput from "../../common/CommonInput";
import { FiLock, FiMail } from "react-icons/fi";
import { validateSignIn } from "../../../utils/Validation";
import { useNavigate } from "react-router-dom";
import { BsBank2 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

type CredentialInfo = {
    email: string;
    password: string;
};

type SignUpInfo = {
    email: string;
    clinic_name: string;
    password: string;
    c_password: string;
}

const Login = () => {
    const navigate = useNavigate();

    const [credentialInfo, setCredentialInfo] = useState<CredentialInfo>({
        email: "",
        password: "",
    });

    const [signUpInfo, setSignUpdInfo] = useState<SignUpInfo>({
        email: "",
        clinic_name: "",
        password: "",
        c_password: "",
    })

    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const [loginError, setLoginError] = useState<string>("");
    const [isLogin, setIsLogin] = useState<boolean>(true);



    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { email?: string; password?: string } = {};

        const validationErrors = validateSignIn(credentialInfo.email, credentialInfo.password);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        // Add your login logic here
        if (credentialInfo.email === "sample@mail.com" && credentialInfo.password === "123456") {
            setLoginError("");
            navigate("/user")
        } else {
            setCredentialInfo({ email: "", password: "" });
            setLoginError("Invalid email or password"); // professional error message
        }
    };

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-violet-50 p-5">
            {/* Heading */}
            <div className="flex flex-col items-center mb-6">
                <div
                    className={`w-12 h-12 mb-2 transition-all duration-1000 ${isLogin ? "bg-gradient-to-r from-blue-600 to-green-600" : "bg-gradient-to-r from-green-600 to-blue-500"
                        } text-transparent rounded-full flex items-center justify-center`}
                >
                    <BsBank2 size={50} className="fill-current" />
                </div>
                <h2 className={`text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r  from-blue-500 to-green-600`}>
                    Clinic Management System
                </h2>
            </div>
            <div className="relative w-full max-w-xl p-8 rounded-3xl bg-white shadow-xl overflow-hidden transition-all duration-700 ease-in-out h-[550px]">

                {/* Toggle Button */}
                <div className="flex justify-center ">
                    <div className="flex bg-gray-200 rounded-full w-56 relative">
                        {/* Sliding Indicator */}
                        <div
                            className={`absolute  top-0 left-0 w-1/2 h-full  rounded-full shadow-md transition-all duration-300 ${isLogin ? "translate-x-full bg-blue-600" : "bg-green-600"
                                }`}
                        ></div>

                        {/* Buttons */}
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`w-1/2 py-2 text-sm font-medium rounded-full z-50 cursor-pointer transition-colors duration-300 ${!isLogin ? "text-white" : "text-gray-700"
                                }`}
                        >
                            Sign Up
                        </button>
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`w-1/2 py-2 text-sm font-medium rounded-full z-50 cursor-pointer transition-colors duration-300 ${isLogin ? "text-white" : "text-gray-700"
                                }`}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
                {/* Sign In Form */}
                <form
                    onSubmit={handleSignIn}
                    autoComplete="off"
                    className={`absolute top-15 p-8 left-0 w-full transition-all duration-700 ease-in-out ${isLogin ? "translate-x-0 opacity-100 z-1" : "translate-x-full opacity-0 z-0"
                        } space-y-4`}
                >
                    <h2 className="text-xl font-bold text-gray-800 text-center mb-4">Sign In</h2>
                    <CommonInput
                        label="Email"
                        type="email"
                        value={credentialInfo.email}
                        placeholder="you@example.com"
                        onChange={(e) => {
                            setCredentialInfo({ ...credentialInfo, email: e.target.value });
                            setLoginError("");
                        }}
                        required
                        icon={<FiMail />}
                        error={errors.email}
                    />
                    <CommonInput
                        label="Password"
                        type="password"
                        value={credentialInfo.password}
                        placeholder="********"
                        autoComplete="new-password"
                        onChange={(e) => {
                            setCredentialInfo({ ...credentialInfo, password: e.target.value });
                            setLoginError("");
                        }}
                        required
                        icon={<FiLock />}
                        error={errors.password}
                    />

                    <div className="flex justify-end">
                        <button type="button" className="text-sm text-blue-600 hover:underline">
                            Forgot Password?
                        </button>
                    </div>
                    {loginError && <p className="text-sm text-red-500 text-center">{loginError}</p>}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-lg font-medium shadow-md hover:scale-105 transition transform"
                    >
                        Sign In
                    </button>
                </form>

                {/* Sign Up Form */}
                <form
                    autoComplete="off"
                    className={`absolute top-15 p-8 left-0 w-full transition-all duration-700 ease-in-out ${!isLogin ? "translate-x-0 opacity-100 z-20" : "-translate-x-full opacity-0 z-0"
                        } space-y-4`}
                >
                    <h2 className="text-xl font-bold text-gray-800 text-center mb-4">Sign Up</h2>
                    <CommonInput
                        label="Clinic Name"
                        type="text"
                        value={signUpInfo.clinic_name}
                        placeholder="Sample Clinic"
                        onChange={(e) => setSignUpdInfo({ ...signUpInfo, clinic_name: e.target.value })}
                        required
                        icon={<FaUser />}
                    />
                    <CommonInput
                        label="Email"
                        type="email"
                        value={signUpInfo.email}
                        placeholder="you@example.com"
                        onChange={(e) => setSignUpdInfo({ ...signUpInfo, email: e.target.value })}
                        required
                        icon={<FiMail />}
                    />
                    <CommonInput
                        label="Password"
                        type="password"
                        value={signUpInfo.password}
                        placeholder="********"
                        onChange={(e) => setSignUpdInfo({ ...signUpInfo, password: e.target.value })}
                        required
                        icon={<FiLock />}
                    />
                    <CommonInput
                        label="Confirm Password"
                        type="password"
                        value={signUpInfo.c_password}
                        placeholder="********"
                        autoComplete="new-password"
                        onChange={(e) => setSignUpdInfo({ ...signUpInfo, c_password: e.target.value })}
                        required
                        icon={<FiLock />}
                    />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-2 rounded-lg font-medium shadow-md hover:scale-105 transition transform"
                    >
                        Sign Up
                    </button>
                </form>
            </div>



        </div>
    )
}

export default Login