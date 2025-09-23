

const Login = () => {
    // handleSignUp
    const handleSignUp = (): void => {
        alert()
    }
    return (
        <div className="w-full h-screen flex justify-center items-center p-5 md:p-10">
            <div className="w-full h-1/2 md:w-1/2 p-5 rounded-lg bg-black/5 text-black/20 grid place-items-center ">

                <p className="font-bold color  text-2xl">Sign In</p>
                <p className="text-sm">Are you in new <span className="text-blue-500 cursor-pointer" onClick={handleSignUp}>Sign Up</span></p>
            </div>
        </div>
    )
}

export default Login