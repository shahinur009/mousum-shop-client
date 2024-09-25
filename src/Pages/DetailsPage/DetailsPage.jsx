import ImageGallery from "react-image-gallery";
import bg from '../../../public/Login-background.jpg'
import "react-image-gallery/styles/css/image-gallery.css";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const DetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null); // Set initial state to null
  const { id } = useParams();

  const getProducts = async () => {
    try {
      const res = await axios.get(`https://backend-six-rosy.vercel.app/show-product/${id}`);
      setProduct(res?.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getProducts();
    setLoading(false);
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  // Format the product images for ImageGallery
  const images = product.images?.map((img) => ({
    original: img,
    thumbnail: img,
  })) || []; // Ensure it's an array

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center flex flex-col md:flex-row justify-between p-8 mx-auto"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
      <img src={product.image} alt="" />
        {/* {images.length > 0 ? (
          <ImageGallery
            isFullscreen={false}
            thumbnailPosition={"left"}
            items={images}
            showThumbnails={true}
            additionalClass="custom-gallery"
          />
        ) : (
          <p>No images available</p>
        )} */}
      </div>

      {/* Details Section */}
      <div className="w-full md:w-1/2 p-4 md:pl-20">
        <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
        <div className="text-sm mb-4 flex gap-1">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        </div>
        <div className="text-lg mb-2">
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Brand:</strong> {product.brand || "Unknown"}
          </p>
          <p>
            <strong>Model:</strong> {product.model || "N/A"}
          </p>
        </div>
        <button className="mt-4 px-4 ml-2 py-2 font-semibold text-white  rounded bg-blue-600  hover:bg-blue-800 ">
          Sell one like this
        </button>

        <Link to={`/payment/${id}`} className="mt-4 px-4 ml-2 py-2 font-semibold text-white  rounded bg-[#f57224]  hover:bg-[#963a05] transition-all duration-500">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default DetailsPage;
