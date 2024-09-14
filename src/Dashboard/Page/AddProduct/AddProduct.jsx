import { useState } from "react";
import bg from '../../../../public/Login-background.jpg'
import { toast } from "react-toastify";
import { imageUpload } from "../../../Utilities/Utilites";
import axios from "axios";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState({
    name: "",
    details: "",
    category: "",
    stock: "",
    price: "",
    image: null,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle image file change
  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const { name, details, category, stock, price } = product

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      // upload image form imgbb
      const image_url = await imageUpload(product.image)
      console.log(image_url)
      const sendingData = {
        name,
        image: image_url,
        details, category, stock, price
      }
      const res = axios.post('http://localhost:5000/add-product', sendingData)
      console.log(res)
      if (res) {

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });

        setLoading(false);
      }
      // error handle
    } catch (error) {
      console.error("Error from add product", error);
      toast.error(error.message);
      setLoading(false)
    }

  };

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center min-h-screen w-full mx-auto bg-white p-6 flex rounded-lg shadow-md items-center">
      <div className="w-[50%] mx-auto ">
        <h2 className="md:text-3xl text-md font-extrabold mb-6 text-center">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="''">
            <label className="block text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="''">
            <label className="block text-gray-700">Product Details</label>
            <textarea
              name="details"
              value={product.details}
              onChange={handleChange}
              className="w-full p-2 border resize-none border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="''">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="''">
            <label className="block text-gray-700">Stock</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="''">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="''">
            <label className="block text-gray-700">Product Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#f57224] text-white p-2"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;