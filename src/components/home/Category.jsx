import "./home.css"

const Category = () => {
    return (
        <div className="font-2 w-[90%] md:w-[1100px] mx-auto py-8 md:py-16 rounded-xl mb-36 px-4 md:px-20 bg-[var(--e)] relative z-30 ">
            <h3 className="font-1 text-4xl font-semibold text-gray-800 text-center">Top Genres</h3>
            <div className="mt-8 flex items-center justify-center flex-col md:flex-row gap-6 px-10">
                <div className="relative group">
                    <div className="category-bg absolute top-0 left-0 z-10 h-full w-full rounded-lg"></div>
                    <img src="/category/OIG2.jpg" alt="" className="object-cover rounded-lg" />
                    <p className="text-4xl font-semibold absolute bottom-6 left-6 text-purple-600 z-20 group-hover:scale-125 group-hover:bottom-8 group-hover:left-12 transition-all duration-300 ease-in">Movies</p>
                </div>
                <div className="relative group">
                    <div className="category-bg absolute top-0 left-0 z-10 h-full w-full rounded-lg"></div>
                    <img src="/category/OIG5.jpg" alt="" className="object-cover rounded-lg" />
                    <p className="text-4xl font-semibold absolute bottom-6 left-6 text-purple-600 z-20 group-hover:scale-125 group-hover:bottom-8 group-hover:left-12 transition-all duration-300 ease-in">Web Series</p>
                </div>
                <div className="relative group">
                    <div className="category-bg absolute top-0 left-0 z-10 h-full w-full rounded-lg"></div>
                    <img src="/category/OIG3.jpg" alt="" className="object-cover rounded-lg" />
                    <p className="text-4xl font-semibold absolute bottom-6 left-6 text-purple-600 z-20 group-hover:scale-125 group-hover:bottom-8 group-hover:left-12 transition-all duration-300 ease-in">Comedy</p>
                </div>
                <div className="relative group">
                    <div className="category-bg absolute top-0 left-0 z-10 h-full w-full rounded-lg"></div>
                    <img src="/category/OIG4.jpg" alt="" className="object-cover rounded-lg" />
                    <p className="text-4xl font-semibold absolute bottom-6 left-6 text-purple-600 z-20 group-hover:scale-125 group-hover:bottom-8 group-hover:left-12 transition-all duration-300 ease-in">Tv Show</p>
                </div>
            </div>
        </div>
    );
};

export default Category;