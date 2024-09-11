import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from "../assets/details/s-l1600 (1).webp";
import img2 from "../assets/details/s-l1600 (2).webp";
import img3 from "../assets/details/s-l1600.webp";
import { FaStar } from "react-icons/fa";
import "./Custom.css"




const Details = () => {
  const images = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between p-4 max-w-6xl mx-auto">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <ImageGallery
          isFullscreen={false}
          thumbnailPosition={"left"}
          items={images}
          showThumbnails={true}
          additionalClass="custom-gallery"
          
          
        />
      </div>

      {/* Details Section */}
      <div className="w-full md:w-1/2 p-4 md:pl-20">
        <h1 className="text-2xl font-semibold mb-2">
          Jordan 4 Retro Mid Military Black
        </h1>
        <div className="text-sm mb-4 flex gap-1">
          <span>
            <FaStar className="text-yellow-500" />
          </span>
          <span>
            <FaStar className="text-yellow-500" />
          </span>
          <span>
            <FaStar className="text-yellow-500" />
          </span>
          <span>
            <FaStar className="text-yellow-500" />
          </span>
        </div>
        <div className="text-lg mb-2">
          <p>
            <strong>Colorway:</strong> White / Black / Neutral Grey
          </p>
          <p>
            <strong>Style Code:</strong> DH6927-111
          </p>
          <p>
            <strong>Release Date:</strong> May 22, 2022
          </p>
          <p>
            <strong>Department:</strong> Men
          </p>
          <p>
            <strong>Brand:</strong> Jordan
          </p>
          <p>
            <strong>Model:</strong> Air Jordan 4
          </p>
        </div>
        <button className="mt-4 px-4 ml-2 py-2 font-semibold text-white  rounded bg-blue-600  hover:bg-blue-800 ">
          Sell one like this
        </button>
       
        <button className="mt-4 px-4 ml-2 py-2 font-semibold text-white  rounded bg-blue-600  hover:bg-blue-800 ">
          Buy Now
        </button>
     
      </div>
    </div>
  );
};

export default Details;