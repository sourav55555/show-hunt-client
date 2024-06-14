import { LogIn, MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import useUser from "../hooks/useUser";
import NavDrawer from "../components/Navbar/NavDrawer";


const Login = () => {

    const { signIn, googleLogin } = useAuth();
    const { reload, setReload } = useUser();

    // function for updating user data 
    const updateUser = (userData) => {

        fetch("https://show-hunt-backend.onrender.com/user", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Login Successful');
                setReload(!reload)
            });
    }

    // email password login 
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email, password)
            .then(() => {
                toast.success('Login Successful');
                setReload(!reload)
            }
            ).catch((error) => {
                // Display the error message
                toast.error(`Login Failed: ${error.message}`);
            });

    }

    // google login 
    const handleGoogle = () => {
        googleLogin()
            .then(data => {
                const userData = { name: data.user.displayName, email: data.user.email }
                toast.success('Login Successful');
                updateUser(userData);
                setReload(!reload);
                // navigate(navPath);
            })
    }

    return (
        <div className="h-screen overflow-y-hidden relative">
            <div className='md:hidden block absolute top-8 left-4 z-30'>
                <NavDrawer />
            </div>
            <div className="flex items-center justify-center md:flex-row flex-col gap-12 px-24 mt-28">
                <div className="md:w-1/2">
                    <div className="ms:w-[90%] mx-auto h-full p-10 rounded-xl">
                        <p className="font-1 text-3xl font-semibold">Login & Enjoy</p>

                        {/* login form  */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-8">
                            <input type="email" name="email" id=""
                                className="py-4 px-7 rounded-md text-lg bg-black/10 outline-none ring-0 placeholder:text-slate-500"
                                placeholder="Enter Email*"

                            />
                            <input type="password" name="password" id="" className="py-4 px-7 rounded-md text-lg bg-black/10 outline-none ring-0 placeholder:text-slate-500"
                                placeholder="Enter Password*"
                            />
                            <button type="submit" className="py-4 px-7 rounded-md font-semibold bg-[var(--e)] outline-none ring-0 placeholder:text-slate-500 hover:bg-[var(--p)] transition-all duration-300 shadow-md flex items-center justify-center gap-4"> <LogIn /> Login</button>
                        </form>
                        <p className="mt-4">Don't have an account? Please <Link to="/register" className="text-purple-800 underline font-semibold">Register</Link> here</p>

                        {/* google login button  */}
                        <button className="py-4 mt-8 w-full rounded-md font-semibold bg-[var(--e)] outline-none ring-0 placeholder:text-slate-500 hover:bg-[var(--p)] transition-all duration-300 shadow-md flex items-center justify-center gap-4"
                            onClick={handleGoogle}
                        > Login with google</button>
                    </div>
                </div>


                <div className="w-1/2">
                    <img src="/film-reel-icon-2GR8G5R.jpg" className="w-[90%] object-cover" alt="" />
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;