import { useState } from "react";
import CommonInput from "../../common/CommonInput";
import { FiLock, FiMail } from "react-icons/fi";
import { validateSignIn } from "../../../utils/Validation";
import { useNavigate } from "react-router-dom";
type CredentialInfo = {
    email: string;
    password: string;
};

const Login = () => {
    const navigate = useNavigate();

    const [credentialInfo, setCredentialInfo] = useState<CredentialInfo>({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const [loginError, setLoginError] = useState<string>("");



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

    const handleSignUp = () => {
        console.log("Redirect to Sign Up page");
    };
    return (
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 to-violet-400/20 p-5">
            <div className="w-full max-w-md p-8 rounded-2xl bg-white shadow-lg">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Sign In</h2>
                <p className="text-gray-500 text-center text-sm mb-6">
                    New here?{" "}
                    <span
                        className="text-blue-600 cursor-pointer font-medium active:scale-x-95 hover:underline"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </span>
                </p>

                {/* Form */}
                <form onSubmit={handleSignIn} autoComplete="off" className="space-y-4">
                    {/* Email */}
                    <CommonInput
                        label="Email"
                        type="email"
                        value={credentialInfo.email}
                        placeholder="you@example.com"
                        onChange={(e) => { setCredentialInfo({ ...credentialInfo, email: e.target.value }), setLoginError("")}}
                        required
                        icon={<FiMail />} // 👈 email icon
                        error={errors.email} // 👈🏻 error message Email
                    />

                    {/* Password */}
                    <CommonInput
                        label="Password"
                        type="password"
                        value={credentialInfo.password}
                        placeholder="********"
                        autoComplete="new-password"
                        onChange={(e) =>{setCredentialInfo({ ...credentialInfo, password: e.target.value }), setLoginError("")}}
                        required
                        icon={<FiLock />} // 👈 lock icon
                        error={errors.password} // 👈🏻 error message Password
                    />

                    {/* Forgot password */}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="text-sm cursor-pointer text-blue-600 hover:underline active:scale-x-95"
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
                        className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center">
                    <hr className="flex-1 border-gray-300" />
                    <span className="px-2 text-sm text-gray-400">or</span>
                    <hr className="flex-1 border-gray-300" />
                </div>

                {/* Social Login */}
                <button
                    type="button"
                    className="w-full cursor-pointer flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-50 transition"
                >
                    <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    Continue with Google
                </button>
            </div>
        </div>
    )
}

export default Login