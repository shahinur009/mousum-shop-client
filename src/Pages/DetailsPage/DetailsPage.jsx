import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import bg from "../../../public/Login-background.jpg";
import img1 from "../../../public/Product Image/1 (1).jpeg";
import img2 from "../../../public/Product Image/1 (2).jpeg";
import img3 from "../../../public/Product Image/1 (3).jpeg";
import img4 from "../../../public/Product Image/1 (4).jpeg";
import img5 from "../../../public/Product Image/1 (5).jpeg";
import img6 from "../../../public/Product Image/1 (6).jpeg";

import { FaStar } from "react-icons/fa";
// import "./Custom.css"




const DetailsPage = () => {
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
    {
      original: img4,
      thumbnail: img4,
    },
    {
      original: img5,
      thumbnail: img5,
    },
    {
      original: img6,
      thumbnail: img6,
    },
  ];

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center flex flex-col md:flex-row justify-between p-8 mx-auto">
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

        <button className="mt-4 px-4 ml-2 py-2 font-semibold text-white  rounded bg-[#f57224]  hover:bg-[#963a05] transition-all duration-500">
          Buy Now
        </button>

      </div>
    </div>
  );
};

export default DetailsPage;