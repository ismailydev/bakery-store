import { Link } from "react-router-dom";
import { CartItem, OrderSummary } from "../components";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import { data as products } from "../constants";

export default function Checkout() {
    return (
        <div className="min-h-screen py-12 flex gap-12">
            <div className="flex-1">
                <div className="flex justify-between items-center border-b border-box pb-5">
                    <h1 className="text-3xl font-bold">Your Information</h1>
                </div>
                <div className="flex flex-col gap-8 py-8">
                    <div className="flex justify-between gap-5">
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="" className="font-semibold">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="">Last Name</label>
                            <input
                                type="text"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="" className="font-semibold">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="">Phone Number</label>
                            <input
                                type="tel"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="" className="font-semibold">
                                Address
                            </label>
                            <input
                                type="email"
                                className="p-3 border border-box outline-primary"
                                placeholder="123 Main St"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="" className="font-semibold">
                                Address (Optional)
                            </label>
                            <input
                                type="email"
                                className="p-3 border border-box outline-primary"
                                placeholder="Apartment or Suite"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="" className="font-semibold">
                                Town/City
                            </label>
                            <input
                                type="email"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="" className="font-semibold">
                                Country
                            </label>
                            <input
                                type="email"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="">State</label>
                            <input
                                type="tel"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="">Zip / Postcode</label>
                            <input
                                type="tel"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center border-b border-box pb-5 py-2">
                    <h1 className="text-3xl font-bold">
                        Schedule Order Pick-up
                    </h1>
                </div>
                <div className="flex flex-col gap-8 py-8">
                    <div className="flex justify-between gap-5">
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="" className="font-semibold">
                                Date
                            </label>
                            <input
                                type="date"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="">Time</label>
                            <input
                                type="time"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="" className="font-semibold">
                                Comments
                            </label>
                            <textarea
                                rows="5"
                                className="p-3 border border-box outline-primary"
                                placeholder="Any information or details you want to let us know in relation to your order and pick-up."
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="flex gap-2 flex-1">
                            <input type="checkbox" name="" id="" />
                            <p>
                                Subscribe to our products, services, and
                                marketing emails.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end gap-5">
                        <button className="bg-primary text-white px-24 text-sm py-3">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
            <OrderSummary checkout />
        </div>
    );
}
