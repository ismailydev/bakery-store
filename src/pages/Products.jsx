import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductCard } from "../components";
import { data as products } from "../constants";

export default function Products() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen py-12">
            <div className="flex justify-between">
                <h1 className="text-xl md:text-3xl font-bold">All Products</h1>
                <div className="flex items-center text-sm">
                    <p>Sort By:</p>
                    <select
                        name="sortBy"
                        id="sortBy"
                        className="outline-primary"
                    >
                        <option value="Newest">Newest</option>
                        <option value="Popular">Popular</option>
                        <option value="Lowest Price">Lowest Price</option>
                        <option value="Highest Price">Highest Price</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-12">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}
