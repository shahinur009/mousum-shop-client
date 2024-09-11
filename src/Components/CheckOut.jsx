import React, { useState } from "react";
import { FaUser, FaPhone } from "react-icons/fa";

const CheckOut = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [shippingMethod, setShippingMethod] = useState("dhaka");
  const [coupon, setCoupon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data to the console
    console.log({
      name,
      phone,
      address,
      shippingMethod,
      coupon,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-lg font-semibold text-center mb-4">
        ক্যাশ অন ডেলিভারিতে অর্ডার করতে আপনার তথ্য দিন
      </h2>

      {/* Name Field */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          আপনার নাম *
        </label>
        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <FaUser className="text-gray-400 mr-2" />
          <input
            type="text"
            id="name"
            placeholder="আপনার নাম"
            className="w-full focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      {/* Phone Number Field */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phone"
        >
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
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="address"
        >
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
        <label className="block text-gray-700 text-sm font-bold mb-2">
          শিপিং মেথড *
        </label>
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
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="coupon"
        >
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

      {/* Cart Summary */}
      <div className="border-t border-gray-300 pt-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">
            Local Maghi Sarisha Oil / কাঠের ঘানির ভাঁটেন খাঁটি সরিষার তেল (৫
            লিটার)
          </span>
          <span className="text-gray-700">Tk 1,450.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">সাব টোটাল</span>
          <span className="text-gray-700">Tk 1,450.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">ডেলিভারি চার্জ</span>
          <span className="text-gray-700">
            {shippingMethod === "outside" ? "Tk 130.00" : "Tk 70.00"}
          </span>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600"
        >
          Order Conform
        </button>
      </div>
    </form>
  );
};

export default CheckOut;
