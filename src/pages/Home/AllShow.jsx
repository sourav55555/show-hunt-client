import ShowCard from "../../components/AllShows/ShowCard";
import NavDrawer from "../../components/Navbar/NavDrawer";
import Loader from "../../components/loader/Loader";
import useAllShows from "../../hooks/useAllShows";


const AllShow = () => {

    // get all show data 
    const { allShow, loading } = useAllShows();


    return (
        <div className='font-2 pb-32 py-24 relative'>
            <div className='md:hidden block absolute top-8 left-4 z-30'>
                <NavDrawer />
            </div>
            <h3 className="font-1 text-4xl md:text-5xl font-semibold text-gray-800 text-center">Show List</h3>
            {loading && <Loader/>}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center md:px-32 px-8 mt-14'>
                {
                    allShow.map(data => <ShowCard key={data._id} data={data} />)
                }
            </div>
        </div>
    );
};

export default AllShow;