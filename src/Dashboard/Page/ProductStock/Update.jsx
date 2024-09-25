import { useEffect, useState } from "react";
import bg from '../../../../public/Login-background.jpg';
import { toast } from "react-toastify";
import { imageUpload } from "../../../Utilities/Utilites";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        details: "",
        category: "",
        stock: "",
        price: "",
        color: "",
        code: "",
        model: "",
        brand: "",
        image: null,
    });

    // Fetch the product data based on ID from the URL
    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await axios.get(`https://backend-six-rosy.vercel.app/stockUpdate/${id}`);
                const fetchedProduct = response?.data;
                // console.log(response)
                if (fetchedProduct) {
                    setProduct({
                        name: fetchedProduct.name || "",
                        details: fetchedProduct.details || "",
                        category: fetchedProduct.category || "",
                        stock: fetchedProduct.stock || "",
                        price: fetchedProduct.price || "",
                        color: fetchedProduct.color || "",
                        code: fetchedProduct.code || "",
                        brand: fetchedProduct.brand || "",
                        model: fetchedProduct.model || "",
                        image: fetchedProduct.image || null,
                    });
                } else {
                    toast.error('Product not found');
                }
            } catch (error) {
                console.error("Error fetching product data", error);
                toast.error('Failed to fetch product data');
            }
        };

        fetchProductData();
    }, [id]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    // Handle image file change
    const handleImageChange = (e) => {
        setProduct({ ...product, image: e.target.files[0] });
    };

    const { name, details, category, stock, price, color, code, brand, model } = product;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            // Upload the image via utility function
            const image_url = await imageUpload(product.image);
            const updatedProduct = {
                name,
                image: image_url,
                details,
                category,
                stock,
                price,
                color,
                code,
                brand,
                model,
            };
            const res = await axios.put(`https://backend-six-rosy.vercel.app/updateProduct/${id}`, updatedProduct);
            if (res) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product updated successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setLoading(false);
                navigate('/dashboard/stock'); // Redirect to stock dashboard after updating
            }
        } catch (error) {
            console.error("Error updating product", error);
            toast.error("Product update failed!");
            setLoading(false);
        }
    };

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center min-h-screen w-full mx-auto bg-white p-6 flex rounded-lg shadow-md items-center">
            <div className="w-[50%] mx-auto ">
                <h2 className="md:text-3xl text-md font-extrabold mb-6 text-center">Update Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="''">
                        <label className="block text-gray-700">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="''">
                        <label className="block text-gray-700">Product Details</label>
                        <textarea
                            name="details"
                            value={details}
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
                            value={category}
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
                            value={stock}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="''">
                        <label className="block text-gray-700">Color</label>
                        <input
                            type="text"
                            name="color"
                            value={color}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="''">
                        <label className="block text-gray-700">Product Code</label>
                        <input
                            type="text"
                            name="code"
                            value={code}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="''">
                        <label className="block text-gray-700">Brand</label>
                        <input
                            type="text"
                            name="brand"
                            value={brand}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="''">
                        <label className="block text-gray-700">Model</label>
                        <input
                            type="text"
                            name="model"
                            value={model}
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
                            value={price}
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
                        disabled={loading}
                    >
                        {loading ? "Updating..." : "Update Product"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Update;
