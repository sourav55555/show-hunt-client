import React from 'react';
import useAllShows from '../../hooks/useAllShows';
import ShowCard from './ShowCard';
import Loader from '../loader/Loader';

const AllShows = () => {

    const { allShow, loading } = useAllShows();

    return (
        <div className='font-2 pb-32'>
            <h3 className="font-1 md:text-4xl text-3xl font-semibold text-gray-800 text-center">Top Show List</h3>

            {loading && <Loader/>}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center px-8 md:px-32 mt-14'>
                {
                    allShow.slice(0, 6).map(data => <ShowCard key={data._id} data={data}/>)
                }
            </div>
        </div>
    );
};

export default AllShows;