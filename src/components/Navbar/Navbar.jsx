import { Link } from "react-router-dom";
import NavDrawer from "./NavDrawer";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";


const Navbar = () => {

    const { user, logOut } = useAuth();
    const { name } = useUser();
    console.log(name, "name");

    return (
        <div className="w-[250px] fixed top-0 left-0 h-screen bg-purple-800/70 hidden md:block">
        <h2 className="font-1 text-3xl font-semibold text-[var(--p)] text-center py-10 italic">SHOW HUNT</h2>
            <div className="ms-16 mt-16 flex flex-col gap-6 font-1 tracking-wide text-lg text-cyan-50">
                <Link to="/">Home </Link>
                <Link to="/allShow">All Shows </Link>
                {
                    user ? <>
                        
                    </> :
                        <>
                            <Link to="/login" className=' underline'>Login</Link>
                            <Link to="/register" className=' underline'>Registration</Link>
                        </>
                }
            </div>
            <div className="w-full text-center mt-14">
                {user && <>
                    <p className='py-1 px-2 border rounded-xl w-fit mx-auto border-[var(--p)] text-[var(--p)]'>{name}</p>
                        <button onClick={() => logOut()} className='font-semibold border border-red-400 rounded-sm text-red-200 px-3 py-1 mt-4'>Logout</button>
                </>}
            </div>
        </div>
    );
};

export default Navbar;