import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { SquareMenu } from 'lucide-react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';


export default function NavDrawer() {
    const [open, setOpen] = React.useState(false);

    const {user, logOut} = useAuth();
    const { name } = useUser();
    console.log(name)

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250, height: "100%" , backgroundColor: "rgb(107,33,168,0.7)"  }} role="presentation" onClick={toggleDrawer(false)}>
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
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}><SquareMenu className='text-cyan-300' /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)} sx={{backgroundColor: "rgba(107,33,168,0.7)"}}>
                {DrawerList}
            </Drawer>
        </div>
    );
}