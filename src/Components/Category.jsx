import { FaBriefcase, FaHeadphones, FaHome, FaGifts, FaBaby, FaShoePrints, FaCar, FaLeaf, FaTshirt, FaDumbbell, FaWarehouse, FaBox, FaGem, FaCouch } from 'react-icons/fa'; 

const categories = [
    { name: 'Business Services', icon: <FaBriefcase size={32} /> },
    { name: 'Consumer Electronics', icon: <FaHeadphones size={32} /> },
    { name: 'Home & Garden', icon: <FaHome size={32} /> },
    { name: 'Beauty', icon: <FaGifts size={32} /> },
    { name: 'Mother, Kids & Toys', icon: <FaBaby size={32} /> },
    { name: 'Shoes & Accessories', icon: <FaShoePrints size={32} /> },
    { name: 'Vehicle Parts & Accessories', icon: <FaCar size={32} /> },
    { name: 'Environment', icon: <FaLeaf size={32} /> },
    { name: 'Apparel & Accessories', icon: <FaTshirt size={32} /> },
    { name: 'Sports & Entertainment', icon: <FaDumbbell size={32} /> },
    { name: 'Commercial Equipment', icon: <FaWarehouse size={32} /> },
    { name: 'Packaging & Printing', icon: <FaBox size={32} /> },
    { name: 'Jewelry, Eyewear', icon: <FaGem size={32} /> },
    { name: 'Furniture', icon: <FaCouch size={32} /> },
];

const Categories = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  gap-4 sm:gap-6 w-full mx-auto ">
            {categories.map((category, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 bg-white border-2 rounded-full shadow-sm hover:shadow-md transition-shadow h-36 w-36 lg:h-40 lg:w-40"
                >
                    <div className="mb-2 sm:mb-4 text-gray-700">
                        {category.icon}
                    </div>
                    <span className="text-center text-xs sm:text-sm md:text-base font-medium">{category.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Categories;
