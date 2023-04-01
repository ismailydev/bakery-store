import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../redux/cartSlice";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import CheckoutCard from "./CheckoutCard";

export default function OrderSummary({ checkout }) {
    const products = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const [groupedProductsInCart, setGroupedProductsInCart] = useState([]);

    let tax = 1;
    let totalTax = tax * products.length;

    useEffect(() => {
        const groupedProducts = products.reduce((results, product) => {
            (results[product.id] = results[product.id] || []).push(product);
            return results;
        }, {});

        setGroupedProductsInCart(groupedProducts);
    }, [products]);

    return (
        <div className="w-full md:w-[350px]">
            <div className="shadow-lg">
                <div className="flex justify-between p-5 border-b border-box">
                    <h1 className="text-2xl font-semibold">Order Summary</h1>
                </div>
                {checkout && (
                    <div className="border-b border-box">
                        {Object.entries(groupedProductsInCart).map(
                            ([key, products]) => (
                                <CheckoutCard
                                    key={key}
                                    {...products[0]}
                                    quantity={products.length}
                                />
                            )
                        )}
                    </div>
                )}
                <div className="p-5">
                    <form className="border-b border-box pb-5">
                        <div className="flex justify-center gap-2">
                            <input
                                type="text"
                                className="outline-none w-full border border-box px-4"
                                placeholder="Enter Coupon Code"
                            />
                            <button className="bg-primary text-white text-sm p-2">
                                Apply
                            </button>
                        </div>
                    </form>
                    <div className="border-b border-box pb-5 py-5 flex flex-col gap-3">
                        <div className="flex justify-between">
                            <p className="font-semibold">
                                Item Subtotal ({products.length})
                            </p>
                            <p className="text-tertiary">${cartTotal}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Delivery</p>
                            <p className="text-tertiary">In-Store Pickup</p>
                        </div>
                    </div>
                    <div className="py-5 flex flex-col gap-3">
                        <div className="flex justify-between">
                            <p className="font-semibold">Estimated Tax</p>
                            <p className="text-tertiary">${totalTax}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Total</p>
                            <p className="text-tertiary">
                                ${totalTax + cartTotal}
                            </p>
                        </div>
                    </div>
                    <Link to="/checkout">
                        <button className="w-full text-sm bg-primary text-white py-3">
                            Checkout
                        </button>
                    </Link>
                </div>
            </div>
            <div className="text-center py-8 text-sm flex items-center justify-center gap-2">
                <ChatBubbleLeftIcon className="w-4 h-4 text-primary" />
                <p>
                    Need Help? <span className="text-primary">Chat Now</span>
                </p>
            </div>
        </div>
    );
}
