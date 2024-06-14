
import { HandCoins } from 'lucide-react';
import { Link } from 'react-router-dom';

const Success = () => {


    return (
        <div className='flex items-center justify-center gap-4 h-screen flex-col'>
            <p className='md:text-4xl text-3xl px-4 text-purple-800 font-semibold'>Ticket Purchase Successful!</p>
            <HandCoins />
            <Link to="/allShow" className='px-6 py-3 bg-cyan-500 text-white rounded-md shadow-md'>Browse More</Link>
        </div>
    );
};

export default Success;