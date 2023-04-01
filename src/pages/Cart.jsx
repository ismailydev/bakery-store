import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartItem, OrderSummary } from "../components";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import { selectCartItems } from "../redux/cartSlice";

export default function Cart() {
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
        <div className="min-h-screen py-12 flex flex-col md:flex-row gap-12">
            <div className="flex-1">
                <div className="flex justify-between items-center border-b border-box pb-5">
                    <h1 className="text-xl md:text-3xl font-bold">
                        Shopping Cart
                    </h1>
                    <p className="font-semibold">
                        {products.length}{" "}
                        {products.length === 1 ? "Item" : "Items"}
                    </p>
                </div>
                {Object.entries(groupedProductsInCart).length !== 0 ? (
                    <div className="grid grid-cols-1 pb-12">
                        {Object.entries(groupedProductsInCart).map(
                            ([key, products]) => (
                                <CartItem
                                    key={key}
                                    id={key}
                                    {...products[0]}
                                    quantity={products.length}
                                />
                            )
                        )}
                    </div>
                ) : (
                    <p className="py-8">You have no items in cart.</p>
                )}

                <div className="flex justify-between items-center text-primary">
                    <div className="flex items-center gap-1">
                        <ChevronLeftIcon className="w-4 h-4" />
                        <Link to="/" className="">
                            Continue Shopping
                        </Link>
                    </div>
                    <p className="">Update Cart</p>
                </div>
            </div>
            <OrderSummary />
        </div>
    );
}
