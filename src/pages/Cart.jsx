import { CartItem, OrderSummary } from "../components";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import { data as products } from "../constants";
import { Link } from "react-router-dom";

export default function Cart() {
    return (
        <div className="min-h-screen py-12 flex gap-12">
            <div className="flex-1">
                <div className="flex justify-between items-center border-b border-box pb-5">
                    <h1 className="text-3xl font-bold">Shopping Cart</h1>
                    <p className="font-semibold">{products.length} Items</p>
                </div>
                <div className="grid grid-cols-1 pb-12">
                    {products.map((product) => (
                        <CartItem key={product.id} {...product} />
                    ))}
                </div>
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
