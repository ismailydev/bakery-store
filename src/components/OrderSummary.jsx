import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import CheckoutCard from "./CheckoutCard";

import { data as products } from "../constants";

export default function OrderSummary({ checkout }) {
    return (
        <div className="w-[350px]">
            <div className="shadow-lg">
                <div className="flex justify-between p-5 border-b border-box">
                    <h1 className="text-2xl font-semibold">Order Summary</h1>
                </div>
                {checkout && (
                    <div className="border-b border-box">
                        {products.map((product) => (
                            <CheckoutCard key={product.id} {...product} />
                        ))}
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
                            <p className="font-semibold">Item Subtotal (3)</p>
                            <p className="text-tertiary">$112</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Delivery</p>
                            <p className="text-tertiary">In-Store Pickup</p>
                        </div>
                    </div>
                    <div className="py-5 flex flex-col gap-3">
                        <div className="flex justify-between">
                            <p className="font-semibold">Estimated Tax</p>
                            <p className="text-tertiary">$3</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Total</p>
                            <p className="text-tertiary">$115</p>
                        </div>
                    </div>
                    <button className="w-full text-sm bg-primary text-white py-3">
                        Checkout
                    </button>
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
