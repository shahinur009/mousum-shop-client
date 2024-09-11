import { Link } from "react-router-dom";
import logo from '../../public/logo.png';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleBold } from "react-icons/pi";


const DashboardNavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))

    }
    return (
        <>
            <div className="flex items-center justify-between shadow-md bg-[#dc590d] px-4 py-2">
                {/* Logo Section */}
                <Link to='/dashboard' className="flex items-center justify-center">
                    <img src={logo} alt="logo" className="w-24 h-20 bg-[#dc590d]" />
                    <h1 className="text-white font-bold md:text-4xl">Dashboard </h1>
                </Link>
                <Link to='/' className="btn btn-success ml-5">Home</Link>

                {/* Search and Right Section */}
                <div className="flex items-center flex-grow max-w-[70%] mx-4"> {/* Flex container for alignment */}
                    {/* Search Bar Section */}
                    <div className="relative flex items-center w-full">
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search in AirePro"
                            className="w-full py-2 pl-10 text-xl rounded-l-md focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600"
                        />
                        <button
                            type="button"
                            className="px-4 py-[10px] bg-[#ffe1d2] rounded-r-md border-l border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600"
                        >
                            {/* Search button icon with color */}
                            <CiSearch className="text-[#f57224] text-2xl" />
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-5 ml-4"> {/* Space between Search and Right Section */}
                        <Link to='/add-card'>
                            <PiShoppingCartSimpleBold className="text-white md:text-4xl text-xl" />
                        </Link>
                        {
                            user ? <>
                                <button onClick={handleLogOut} className="text-white font-medium">LogOut</button>
                            </> :
                                <Link to='/login' className="text-white font-medium">Login</Link>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardNavBar;
