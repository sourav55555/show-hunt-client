
import Category from '../../components/home/Category';
import AllShows from '../../components/AllShows/AllShows';
import NavDrawer from '../../components/Navbar/NavDrawer';



const Home = () => {


    return (
        <div>
            <div className='relative'>

            {/* banner bg */}
                <div className='absolute top-0 left-0 w-full h-[calc(100vh+250px)]'>
                    <img src="/2149558808.jpg" alt="" className='h-full w-full object-cover' />
                </div>
                <div className='bg-black/60 absolute left-0 top-0 h-[calc(100vh+250px)] w-full z-10'></div>

                {/* responsive nav button  */}
                <div className='md:hidden block absolute top-8 left-4 z-30'>
                    <NavDrawer/>
                </div>

                <div className='relative z-10 flex items-center justify-center h-[90vh] md:h-screen text-white  '>
                    <div className='w-[80%] mx-auto text-center'>

                        <h2 className='font-semibold text-2xl font-1 capitalize'>Welcome to Show Hunt</h2>
                        <h2 className='text-4xl md:text-6xl mt-10 font-1 capitalize'>Top collection of shows only for you. <br /> Get a best discount <span className='text-[var(--p)]'>upto 100%</span> !!!</h2>
                        <button className='px-12 font-bold shadow-md shadow-gray-400 text-slate-900 text-lg py-4 rounded-lg bg-[var(--p)] mt-12 hover:bg-purple-600 hover:text-white transition-all duration-500 ease-out'>Explore Now</button>
                    </div>
                </div>

            </div>

            <Category />
            <AllShows />
        </div>
    );
};

export default Home;