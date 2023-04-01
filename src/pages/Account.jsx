import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";
import { OrderCard } from "../components";

export default function Account() {
    const products = useSelector(selectCartItems);
    const [groupedProductsInCart, setGroupedProductsInCart] = useState([]);

    useEffect(() => {
        const groupedProducts = products.reduce((results, product) => {
            (results[product.id] = results[product.id] || []).push(product);
            return results;
        }, {});

        setGroupedProductsInCart(groupedProducts);
    }, [products]);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen py-12">
            <div className="flex justify-between">
                <h1 className="text-xl md:text-3xl font-bold">My Orders</h1>
            </div>
            {Object.entries(groupedProductsInCart).length !== 0 ? (
                <div className="grid grid-cols-1 gap-5 py-8 pb:12 md:pb-24">
                    {Object.entries(groupedProductsInCart).map(
                        ([key, products]) => (
                            <OrderCard key={key} {...products[0]} />
                        )
                    )}
                </div>
            ) : (
                <p className="py-8">You have no orders yet.</p>
            )}
        </div>
    );
}
