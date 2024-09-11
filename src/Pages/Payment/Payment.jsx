// // 0ef332a2c749bd86569aa476fa28c72e imgbb key



import bkash from "../../../public/Payment Image/bkash.png";
import nogod from "../../../public/Payment Image/Navad.png";
import { useState } from "react";
import axios from "axios";

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState("bkash"); 
    const [screenshot, setScreenshot] = useState(null);
    const [mobileNumber, setMobileNumber] = useState(""); 
    const [uploading, setUploading] = useState(false);

    const imgbbApiKey = "Your imgbb api key"; // ImgBB API key

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    const handleFileChange = (e) => {
        setScreenshot(e.target.files[0]);
    };

    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (paymentMethod && screenshot && mobileNumber) { 
            try {
                setUploading(true);
                const formData = new FormData();
                formData.append("image", screenshot);

                const response = await axios.post(
                    `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
                    formData
                );

                if (response.data.success) {
                    console.log("Payment method:", paymentMethod);
                    console.log("Screenshot URL:", response.data.data.url);
                    console.log("Mobile number:", mobileNumber); 
                } else {
                    alert("Failed to upload the image.");
                }
            } catch (error) {
                console.error("Error uploading the image:", error);
                alert("An error occurred during image upload.");
            } finally {
                setUploading(false);
            }
        } else {
            alert("Please select a payment method, upload the payment screenshot, and provide your mobile number.");
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-8 p-4">
            <h2 className="text-2xl font-bold mb-4">Choose Your Payment Method</h2>
            <div className="flex justify-between items-center mb-4">
                <button
                    className={`border-2 rounded-md p-2 flex items-center w-full mr-2 ${
                        paymentMethod === "bkash" ? "border-blue-500" : "border-gray-300"
                    }`}
                    onClick={() => handlePaymentMethodChange("bkash")}
                >
                    <img src={bkash} alt="Bkash" className="w-10 h-10 mr-2" />
                    <span>Bkash</span>
                </button>
                <button
                    className={`border-2 rounded-md p-2 flex items-center w-full ml-2 ${
                        paymentMethod === "nogod" ? "border-red-500" : "border-gray-300"
                    }`}
                    onClick={() => handlePaymentMethodChange("nogod")}
                >
                    <img src={nogod} alt="Nagad" className="w-10 h-10 mr-2" />
                    <span>Nagad</span>
                </button>
            </div>
            <button
                className={`border-2 rounded-md p-2 w-full mb-4 ${
                    paymentMethod === "cod" ? "border-green-500" : "border-gray-300"
                }`}
                onClick={() => handlePaymentMethodChange("cod")}
            >
                Cash on Delivery
            </button>
            {paymentMethod !== "cod" && paymentMethod !== "" && (
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">Mobile Number</label>
                    <input
                        type="text"
                        value={mobileNumber}
                        onChange={handleMobileNumberChange}
                        className="border-2 border-gray-300 rounded-md p-2 w-full"
                        placeholder="Enter your mobile number"
                        required
                    />
                    <label className="block mb-2 font-semibold mt-4">Upload Payment Screenshot</label>
                    <input
                        type="file"
                        accept="image/*"
                        className="border-2 border-gray-300 rounded-md p-2 w-full"
                        onChange={handleFileChange}
                        required
                    />
                </div>
            )}
            <button
                className="bg-blue-500 text-white rounded-md p-2 w-full mt-4"
                onClick={handleSubmit}
                disabled={uploading}
            >
                {uploading ? "Uploading..." : "Submit Payment"}
            </button>
        </div>
    );
};

export default Payment;