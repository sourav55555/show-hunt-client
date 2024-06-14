import { FlapperSpinner } from "react-spinners-kit";


const Loader = () => {
    return (
        <div className="w-full h-[600px] grid place-content-center">
            <FlapperSpinner />
        </div>
    );
};

export default Loader;