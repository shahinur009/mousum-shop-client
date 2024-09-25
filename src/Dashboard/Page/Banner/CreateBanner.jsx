import { useState } from "react";
import axios from "axios";

const CreateBanner = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: null,
    });
    const [imageURL, setImageURL] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ImageBB API key
        const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
        const formDataImage = new FormData();
        formDataImage.append("image", formData.image);

        try {
            // Upload image to ImageBB and get the image URL
            const response = await axios.post(`
        https://api.imgbb.com/1/upload?key=${apiKey}`,
                formDataImage
            );
            const imageUrl = response.data.data.url;
            setImageURL(imageUrl);

            // Display the form data
            console.log("Title: ", formData.title);
            console.log("Description: ", formData.description);
            console.log("Image URL: ", imageUrl);


            const formResponse = await axios.post("https://backend-six-rosy.vercel.app/banner-change", {
                title: formData.title,
                description: formData.description,
                bannerImage: imageUrl,
            });
            console.log("return data get", formResponse.data);


        } catch (error) {
            console.error("Error uploading the image", error);
        }
    };

    return (
        <div className="bg-[#F8F8EC] h-[82vh] justify-center flex items-center flex-col">
            <div className="md:w-[40%] w-full shadow-xl  mx-auto p-4 ">
                <h2 className="text-2xl font-bold mb-4 uppercase">Upload Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="mt-1 p-2 block w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="mt-1 p-2 block w-full border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Image</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                            className="mt-1 block w-full text-sm text-gray-900 border rounded-md"
                            required
                        />
                    </div>
                    <div className="py-5 flex justify-center">
                        <button
                            type="submit"
                            className="px-4 py-2 w-[80%] text-center text-white p-4 bg-red-400 font-bold rounded-md "
                        >
                            Banner Upload
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default CreateBanner;