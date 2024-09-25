import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const HomeProducts = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false)

    const getProducts = async () => {
        const res = await axios.get('https://backend-six-rosy.vercel.app/show-product')
        // console.log(res.data)
        setProduct(res?.data)

    }

    useEffect(() => {
        setLoading(true);
        getProducts();
        setLoading(false)


    }, [])
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 min-h-screen p-5">
            {
                product.map(item => (<ProductCard item={item} key={item._id} />))
            }

        </div>
    );
};

export default HomeProducts;