import img2 from '../../public/Banner Imag/4.jpg';
import { FcRating } from "react-icons/fc";

const ProductCard = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
      <div className="bg-white shadow-md hover:shadow-lg border-b-[1px] border-r-[1px] border-l-[1px] border-t-0 border-transparent hover:border-b-[1px] hover:border-r-[1px] hover:border-l-[1px] hover:border-t-0 hover:border-gray-300 transition-shadow duration-300">
        {/* Image Section */}
        <div>
          <img src={img2} alt="Product" className="w-full h-48 object-cover" />
        </div>

        {/* Product Details Section */}
        <div className="px-4 py-2 space-y-2">
          <h1 className="text-gray-700 font-semibold text-md truncate">Security Camera Base Bracket Smart Camera...</h1>
          <div className="flex items-center space-x-2">
            <span className="text-red-500 font-bold text-lg">৳226</span>
            <span className="text-gray-500 text-sm line-through">৳799</span>
            <span className="text-green-600 text-sm font-semibold">-71%</span>
          </div>
          <div className="flex gap-1">
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md hover:shadow-lg border-b-[1px] border-r-[1px] border-l-[1px] border-t-0 border-transparent hover:border-b-[1px] hover:border-r-[1px] hover:border-l-[1px] hover:border-t-0 hover:border-gray-300 transition-shadow duration-300">
        {/* Image Section */}
        <div>
          <img src={img2} alt="Product" className="w-full h-48 object-cover" />
        </div>

        {/* Product Details Section */}
        <div className="px-4 py-2 space-y-2">
          <h1 className="text-gray-700 font-semibold text-md truncate">Security Camera Base Bracket Smart Camera...</h1>
          <div className="flex items-center space-x-2">
            <span className="text-red-500 font-bold text-lg">৳226</span>
            <span className="text-gray-500 text-sm line-through">৳799</span>
            <span className="text-green-600 text-sm font-semibold">-71%</span>
          </div>
          <div className="flex gap-1">
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md hover:shadow-lg border-b-[1px] border-r-[1px] border-l-[1px] border-t-0 border-transparent hover:border-b-[1px] hover:border-r-[1px] hover:border-l-[1px] hover:border-t-0 hover:border-gray-300 transition-shadow duration-300">
        {/* Image Section */}
        <div>
          <img src={img2} alt="Product" className="w-full h-48 object-cover" />
        </div>

        {/* Product Details Section */}
        <div className="px-4 py-2 space-y-2">
          <h1 className="text-gray-700 font-semibold text-md truncate">Security Camera Base Bracket Smart Camera...</h1>
          <div className="flex items-center space-x-2">
            <span className="text-red-500 font-bold text-lg">৳226</span>
            <span className="text-gray-500 text-sm line-through">৳799</span>
            <span className="text-green-600 text-sm font-semibold">-71%</span>
          </div>
          <div className="flex gap-1">
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md hover:shadow-lg border-b-[1px] border-r-[1px] border-l-[1px] border-t-0 border-transparent hover:border-b-[1px] hover:border-r-[1px] hover:border-l-[1px] hover:border-t-0 hover:border-gray-300 transition-shadow duration-300">
        {/* Image Section */}
        <div>
          <img src={img2} alt="Product" className="w-full h-48 object-cover" />
        </div>

        {/* Product Details Section */}
        <div className="px-4 py-2 space-y-2">
          <h1 className="text-gray-700 font-semibold text-md truncate">Security Camera Base Bracket Smart Camera...</h1>
          <div className="flex items-center space-x-2">
            <span className="text-red-500 font-bold text-lg">৳226</span>
            <span className="text-gray-500 text-sm line-through">৳799</span>
            <span className="text-green-600 text-sm font-semibold">-71%</span>
          </div>
          <div className="flex gap-1">
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md hover:shadow-lg border-b-[1px] border-r-[1px] border-l-[1px] border-t-0 border-transparent hover:border-b-[1px] hover:border-r-[1px] hover:border-l-[1px] hover:border-t-0 hover:border-gray-300 transition-shadow duration-300">
        {/* Image Section */}
        <div>
          <img src={img2} alt="Product" className="w-full h-48 object-cover" />
        </div>

        {/* Product Details Section */}
        <div className="px-4 py-2 space-y-2">
          <h1 className="text-gray-700 font-semibold text-md truncate">Security Camera Base Bracket Smart Camera...</h1>
          <div className="flex items-center space-x-2">
            <span className="text-red-500 font-bold text-lg">৳226</span>
            <span className="text-gray-500 text-sm line-through">৳799</span>
            <span className="text-green-600 text-sm font-semibold">-71%</span>
          </div>
          <div className="flex gap-1">
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;