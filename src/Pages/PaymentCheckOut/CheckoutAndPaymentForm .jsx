import React, { useEffect, useState } from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import axios from "axios";
import bkash from "../../../public/Payment Image/bkash.png"
import Nagad from "../../../public/Payment Image/Navad.png"
import bg from "../../../public/Login-background.jpg"
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const CheckoutAndPaymentForm = () => {
    const [customerName, setCustomerName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [shippingMethod, setShippingMethod] = useState("dhaka");
    const [coupon, setCoupon] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("bkash");
    const [screenshot, setScreenshot] = useState(null);
    const [paymentMobileNumber, setPaymentMobileNumber] = useState("");
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const [SingleProduct, setSingleProduct] = useState([]);
    const { brand, category, code, color, image, model, name, price, stock, _id } = SingleProduct

    useEffect(() => {
        const getProduct = async () => {
            const res = await axios.get(`https://backend-six-rosy.vercel.app/singleProduct/${id}`)
            setSingleProduct(res.data)
        }
        getProduct();
    }, [])
    console.log(SingleProduct)


    // cod
    const [cod, setCod] = useState(false)

    const imgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (paymentMethod && (paymentMethod === "cod" || (screenshot && paymentMobileNumber))) {
            try {
                setUploading(true);

                let screenshotUrl = "";
                if (paymentMethod !== "cod") {
                    const formData = new FormData();
                    formData.append("image", screenshot);

                    const response = await axios.post(
                        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
                        formData
                    );

                    if (response.data.success) {
                        screenshotUrl = response.data.data.url;
                    } else {
                        alert("Failed to upload the image.");
                        setUploading(false);
                        return;
                    }
                }

                const paymentData = {
                    customerName,
                    phone,
                    address,
                    shippingMethod,
                    coupon,
                    paymentMethod,
                    paymentMobileNumber,
                    screenshotUrl,
                    cod,
                    status:'pending',
                    product: { brand, category, code, color, image, model, name, price, stock, _id }
                };
                console.log(paymentData)
                const res = await axios.post('https://backend-six-rosy.vercel.app/payment', paymentData)
                console.log(res.data)
                if (res) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Order successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/')
                } else {
                    console.log(error)
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Failed order!',
                    })
                }

                // alert("Form submitted successfully!");
            } catch (error) {
                console.error("Error during submission:", error);
                // alert("An error occurred during form submission.");
            } finally {
                setUploading(false);
            }
        } else {
            // alert("Please complete the form with all required information.");
        }
    };

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover bg-center min-h-screen flex items-center justify-center'>
            <form onSubmit={handleSubmit} className=" w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 shadow-md mx-auto">
                <h2 className="text-lg font-semibold text-center mb-4">
                    অর্ডার করতে আপনার তথ্য দিন
                </h2>

                {/* Name Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        আপনার নাম *
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <FaUser className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            id="name"
                            placeholder="আপনার নাম"
                            className="w-full focus:outline-none"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                    </div>
                </div>

                {/* Phone Number Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        ফোন নাম্বার *
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <FaPhone className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            id="phone"
                            placeholder="ফোন নাম্বার"
                            className="w-full focus:outline-none"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>

                {/* Address Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                        এড্রেস *
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <input
                            type="text"
                            id="address"
                            placeholder="এড্রেস"
                            className="w-full focus:outline-none"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>

                {/* Shipping Method */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">শিপিং মেথড *</label>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="dhaka"
                                name="shipping"
                                value="dhaka"
                                checked={shippingMethod === "dhaka"}
                                onChange={() => setShippingMethod("dhaka")}
                                className="form-radio text-orange-500"
                            />
                            <label htmlFor="dhaka" className="ml-2 text-gray-700">
                                ঢাকা সিটির ভিতরে
                            </label>
                            <span className="ml-auto text-gray-700">Tk 70.00</span>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="chittagong"
                                name="shipping"
                                value="chittagong"
                                checked={shippingMethod === "chittagong"}
                                onChange={() => setShippingMethod("chittagong")}
                                className="form-radio text-orange-500"
                            />
                            <label htmlFor="chittagong" className="ml-2 text-gray-700">
                                চট্টগ্রাম সিটির ভিতরে
                            </label>
                            <span className="ml-auto text-gray-700">Tk 70.00</span>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="outside"
                                name="shipping"
                                value="outside"
                                checked={shippingMethod === "outside"}
                                onChange={() => setShippingMethod("outside")}
                                className="form-radio text-orange-500"
                            />
                            <label htmlFor="outside" className="ml-2 text-gray-700">
                                ঢাকা এবং চট্টগ্রাম সিটির বাইরে
                            </label>
                            <span className="ml-auto text-gray-700">Tk 130.00</span>
                        </div>
                    </div>
                </div>

                {/* Coupon Code */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coupon">
                        কুপন কোড
                    </label>
                    <input
                        type="text"
                        id="coupon"
                        placeholder="কুপন কোড"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                    />
                </div>

                {/* Payment Method */}
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Choose Your Payment Method</h3>
                    <div className="flex justify-between items-center mb-4">
                        <button
                            type="button"
                            className={`border-2 rounded-md p-2 flex items-center w-full mr-2 ${paymentMethod === "bkash" ? "border-blue-500" : "border-gray-300"
                                }`}
                            onClick={() => { setPaymentMethod("bkash"), setCod(false) }}
                        >
                            <img src={bkash} alt="Bkash" className="w-10 h-10 mr-2" />
                            <span>Bkash</span>
                        </button>
                        <button
                            type="button"
                            className={`border-2 rounded-md p-2 flex items-center w-full ml-2 ${paymentMethod === "nogod" ? "border-red-500" : "border-gray-300"
                                }`}
                            onClick={() => { setPaymentMethod("nogod"), setCod(false) }}
                        >
                            <img src={Nagad} alt="Nagad" className="w-10 h-10 mr-2" />
                            <span>Nagad</span>
                        </button>
                    </div>
                    <button
                        type="button"
                        className={`border-2 rounded-md p-2 w-full mb-4 ${paymentMethod === "cod" ? "border-green-500" : "border-gray-300"
                            }`}
                        onClick={() => { setPaymentMethod("cod"), setCod(true) }}
                    >
                        Cash on Delivery
                    </button>
                </div>

                {/* Payment Details */}
                {paymentMethod !== "cod" && paymentMethod !== "" && (
                    <div className="mb-4">
                        <label className="block mb-2 font-semibold">Mobile Number</label>
                        <input
                            type="text"
                            value={paymentMobileNumber}
                            onChange={(e) => setPaymentMobileNumber(e.target.value)}
                            className="border-2 border-gray-300 rounded-md p-2 w-full"
                            placeholder="Enter your mobile number"
                            required
                        />
                        <label className="block mb-2 font-semibold mt-4">Screenshot</label>
                        <input
                            type="file"
                            onChange={(e) => setScreenshot(e.target.files[0])}
                            className="block w-full border-2 border-gray-300 p-2 rounded-md"
                        />
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white w-full p-3 rounded-md font-bold"
                    disabled={uploading}
                >
                    {uploading ? "Order confirming..." : "Order confirm"}
                </button>
            </form>
        </div>
    );
};

export default CheckoutAndPaymentForm;