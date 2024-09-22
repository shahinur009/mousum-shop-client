import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OrderDetails = () => {
    const { id } = useParams();  // Get the id from the URL parameters
    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/details/${id}`);
                setProductDetails(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch product details", error);
                setLoading(false);
            }
        };

        fetchDetails();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!productDetails) {
        return <p>No details found for this product.</p>;
    }

    const { customerName, phone, address, shippingMethod, coupon, paymentMethod, paymentMobileNumber, screenshotUrl, cod, createAt, product } = productDetails;

    return (
        <div className="min-h-screen p-4 bg-gray-100 flex w-[90%] justify-between mx-auto ">
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4 text-center">Product Details</h1>

                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Customer Name</h2>

                    <div>
                        <p>{customerName}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Phone</h2>
                    <p>{phone}</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Address</h2>
                    <p>{address}</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Shipping Method</h2>
                    <p>{shippingMethod}</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Coupon</h2>
                    <p>{coupon}</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Payment Method</h2>
                    <p>{paymentMethod}</p>
                </div>

                {paymentMethod === "bkash" || paymentMethod === "nagad" ? (
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold">Payment Mobile Number</h2>
                        <p>{paymentMobileNumber}</p>

                        <div className="mb-4">
                            <h2 className="text-lg font-semibold">Screenshot</h2>
                            <img src={screenshotUrl} alt="Screenshot" className="w-[40%]" />
                        </div>
                    </div>
                ) : (
                    cod && <p>Cash on Delivery</p>
                )}

                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Created At</h2>
                    <p>{createAt.split("T")[0]}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Product Name</h2>
                    <p>{product.name}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Product Color</h2>
                    <p>{product.color}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Product Image</h2>
                    {/* <image src={product.image}></image> */}
                    <img src={product.image} alt="" className="w-[30%]"/>
                </div>
            </div>
            <div className="md:p-16 p-3">
                <button className="btn btn-secondary">Order Confirm</button>
            </div>
        </div>
    );
};

export default OrderDetails;
