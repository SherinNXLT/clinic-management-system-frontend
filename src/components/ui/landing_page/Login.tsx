import { useState } from "react";
import CommonInput from "../../common/CommonInput";
import { validateSignIn } from "../../../utils/Validation";
import { useNavigate } from "react-router-dom";
import { BiSolidBank } from "react-icons/bi";
import { FaLock, FaUser } from "react-icons/fa";
type CredentialInfo = {
    email: string;
    password: string;
    isCheck: boolean;
};

const Login = () => {
    const navigate = useNavigate();

    const [credentialInfo, setCredentialInfo] = useState<CredentialInfo>({
        email: "",
        password: "",
        isCheck: false,
    });
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const [loginError, setLoginError] = useState<string>("");



    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { email?: string; password?: string; } = {};
        if(!credentialInfo.isCheck){
            setCredentialInfo({email:"", isCheck:false,password:""});
            setLoginError("Plaese check the ☑️")
            return
        }
        const validationErrors = validateSignIn(credentialInfo.email, credentialInfo.password);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        // Add your login logic here
        if (credentialInfo.email === "sample@mail.com" && credentialInfo.password === "123456") {
            setLoginError("");
            navigate("/clinic-system")
        } else {
            setCredentialInfo({ email: "", password: "", isCheck: false });
            setLoginError("Invalid email or password"); // professional error message
        }
    };

    const handleSignUp = () => {
        console.log("Redirect to Sign Up page");
    };
    return (
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 to-violet-400/10 p-5">
            <div className="w-full max-w-md p-8 rounded-2xl bg-white shadow-lg">
                {/* Heading */}
                <div className="flex flex-col justify-center items-center">
                    <BiSolidBank size={45} className="text-blue-500" />
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-500 text-center mb-2">Clinic System</h2>
                    <h2 className="text-sm  text-gray-800 text-center mb-2">sign in to continue</h2>
                </div>


                {/* Form */}
                <form onSubmit={handleSignIn} autoComplete="off" className="space-y-4">
                    {/* Email */}
                    <CommonInput
                        label="Email"
                        type="email"
                        value={credentialInfo.email}
                        placeholder="Username or email"
                        onChange={(e) => { setCredentialInfo({ ...credentialInfo, email: e.target.value }), setLoginError("") }}
                        required
                        icon={<FaUser />} // 👈 email icon
                        error={errors.email} // 👈🏻 error message Email
                    />

                    {/* Password */}
                    <CommonInput
                        label="Password"
                        type="password"
                        value={credentialInfo.password}
                        placeholder="********"
                        autoComplete="new-password"
                        onChange={(e) => { setCredentialInfo({ ...credentialInfo, password: e.target.value }), setLoginError("") }}
                        required
                        icon={<FaLock />} // 👈 lock icon
                        error={errors.password} // 👈🏻 error message Password
                    />

                    {/* Forgot password */}
                    <div className="flex justify-between">
                        <div className="flex gap-1">
                            <input
                                type="checkbox"
                                id="remember"
                                className="accent-blue-500"
                                checked={credentialInfo.isCheck}
                                onChange={(e) => {
                                    setCredentialInfo({
                                        ...credentialInfo,
                                        isCheck: e.target.checked,
                                    });
                                    setLoginError("");
                                }}
                            />
                            <label htmlFor="remember" className="ml-2">Remember Me</label>
                        </div>
                        <button
                            type="button"
                            className="text-sm  cursor-pointer text-blue-600 hover:underline active:scale-x-95"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    {loginError && (
                        <p className="text-sm text-red-500 text-center mb-2">
                            {loginError}
                        </p>
                    )}

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Sign In
                    </button>
                    <p className="text-gray-500 text-center text-sm mb-6">
                        New here?{" "}
                        <span
                            className="text-blue-600 cursor-pointer font-medium active:scale-x-95 hover:underline"
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login