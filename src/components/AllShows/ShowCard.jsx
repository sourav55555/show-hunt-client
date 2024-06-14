import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ShowCard = ({ data }) => {

    const navigate = useNavigate();

    return (
        <div onClick={()=> navigate(`/show/${data._id}`) } className='border text-center rounded-xl shadow-md relative group overflow-x-hidden'>
            <Link to={`/show/${data._id}`} className='bg-[rgba(237,177,241,.7)] h-full w-full absolute top-0 left-full group-hover:left-0 transition-all duration-500 ease-out grid place-content-center text-purple-900'>
                <Search className='w-44 h-44' />
                <p className='mt-5 font-semibold text-2xl'>See Details</p>
            </Link>
            <div className='w-full py-4 bg-purple-200/40'>
                <img src={data.image} alt="" className='h-[260px] object-cover mx-auto rounded-lg' />
            </div>
            <div className='space-y-2 py-4 text-lg'>
                <p className='text-2xl font-semibold text-purple-800'>{data.name}</p>
                <p className='font-semibold'>{data.date}</p>
                <p className='font-semibold'>Price: <span className='font-normal'>{data.price}$</span></p>
            </div>

        </div>
    );
};

export default ShowCard;