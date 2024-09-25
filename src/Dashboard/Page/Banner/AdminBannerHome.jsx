import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


const AdminBannerHome = () => {
    const [banners, setBanners] = useState('')
    const [loading, setLoading] = useState(false);

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`https://backend-six-rosy.vercel.app/banner-delete/${id}`);
                    // Remove the deleted product from the local state
                    setBanners((prevProducts) => prevProducts.filter((product) => product._id !== id));
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Product deleted successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    getProducts(); // Fetch products again after deletion
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Failed to delete product!',
                    });
                }
            }
        });
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-[#F8F8EC] p-4">
            <h1 className="text-xl md:text-3xl font-bold md:my-6 my-4 uppercase text-center">Banner Info</h1>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <div className="flex">
                    <Link to='create-banner' className="text-white p-3 bg-green-600 rounded-t-md font-semibold">Create Banner</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap rounded-sm">
                        <colgroup>
                            <col className="w-5" />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-5" />
                        </colgroup>
                        <thead>
                            <tr className="min-w-full bg-white border border-gray-300">
                                <th className="p-3">Serial</th>
                                <th className="p-3">Title</th>
                                <th className="p-3">Description</th>
                                <th className="p-3">Action</th>

                            </tr>
                        </thead>
                        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            <tr>
                                <td className="px-3 text-2xl font-medium dark:text-gray-600">A</td>
                                <td>
                                    <p>Dwight Adams</p>
                                </td>
                                <td>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, temporibus.</p>
                                </td>
                                <td className="px-3 py-2">
                                    <button onClick={() => handleDelete(product._id)} className="text-white p-4 bg-red-400 rounded-md font-bold">Delete</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminBannerHome;