import { MoveLeft, UserRoundPlus } from "lucide-react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import NavDrawer from "../components/Navbar/NavDrawer";


const Register = () => {

    const { createUser, googleLogin } = useAuth();

    // update user data 
    const updateUser = (userData) => {

        fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => toast.success('Registration Successful'));
    }

    // create user function 
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = { name, email };
        console.log(user);

        console.log(email, password, name);
        createUser(email, password)
            .then(() => updateUser(user))

    }

    // google register function 
    const handleGoogle = () => {
        googleLogin()
            .then(data => {
                const userData = { name: data.user.displayName, image: data.user.photoURL, email: data.user.email }
                updateUser(userData);
                // setReload(!reload);
                // navigate(navPath);
            })
    }

    return (
        <div className=" overflow-y-hidden relative">
            <div className='md:hidden block absolute top-8 left-4 z-30'>
                <NavDrawer />
            </div>

            <div className="flex items-center justify-center flex-col md:flex-row gap-12 px-8 md:px-24 py-14 mt-6">
                <div className="md:w-1/2">
                    <div className="md:w-[90%] mx-auto h-full p-4 md:p-10 rounded-xl">
                        <p className="font-1 text-3xl font-semibold">Create Your Account</p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-8">
                            <input type="text" name="name" id=""
                                className="py-4 px-7 rounded-md text-lg bg-black/10 outline-none ring-0 placeholder:text-slate-500"
                                placeholder="Enter Name*"

                            />
                            <input type="email" name="email" id=""
                                className="py-4 px-7 rounded-md text-lg bg-black/10 outline-none ring-0 placeholder:text-slate-500"
                                placeholder="Enter Email*"

                            />
                            <input type="password" name="password" id="" className="py-4 px-7 rounded-md text-lg bg-black/10 outline-none ring-0 placeholder:text-slate-500"
                                placeholder="Enter Password*"
                            />
                            <button type="submit" className="py-4 px-7 rounded-md font-semibold bg-[var(--e)] outline-none ring-0 placeholder:text-slate-500 hover:bg-[var(--p)] transition-all duration-300 shadow-md flex items-center justify-center gap-4"> <UserRoundPlus />Register</button>
                        </form>
                        <p className="mt-4">Already have an account? Please <Link to="/login" className="text-purple-800 underline font-semibold">Login</Link> here</p>
                        <button className="py-4 mt-8 w-full rounded-md font-semibold bg-[var(--e)] outline-none ring-0 placeholder:text-slate-500 hover:bg-[var(--p)] transition-all duration-300 shadow-md flex items-center justify-center gap-4"
                            onSubmit={handleGoogle}
                        > Create with google</button>
                    </div>
                </div>


                <div className="md:w-1/2 ">
                    <img src="/public/color-background-billboard-banner-with-film-reel-vector-15899842.jpg" className="w-[90%] object-cover rounded-xl mx-auto md:m-0" alt="" />
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Register;