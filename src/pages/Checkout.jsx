import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { OrderSummary } from "../components";
import { countriesURL } from "../constants";

export default function Checkout() {
    const { pathname } = useLocation();
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("United States");
    const [selectedState, setSelectedState] = useState("Massachusetts");

    const fetchCountries = async () => {
        const res = await fetch(countriesURL);
        const { countries: allCountries } = await res.json();
        setCountries(allCountries);
    };

    const getStates = (country) => {
        const countryObj = countries.find((obj) => obj.country === country);
        return countryObj ? countryObj.states : [];
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchCountries();
    }, [pathname]);

    return (
        <div className="min-h-screen py-12 flex gap-12">
            <div className="flex-1">
                <div className="flex justify-between items-center border-b border-box pb-5">
                    <h1 className="text-3xl font-bold">Your Information</h1>
                </div>
                <div className="flex flex-col gap-8 py-8">
                    <div className="flex justify-between gap-5">
                        <div className="flex flex-col gap-2 flex-1">
                            <label
                                htmlFor="firstName"
                                className="font-semibold"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="email" className="font-semibold">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="address" className="font-semibold">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="p-3 border border-box outline-primary"
                                placeholder="123 Main St"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="flex flex-col gap-2 flex-1">
                            <label
                                htmlFor="addressOpt"
                                className="font-semibold"
                            >
                                Address (Optional)
                            </label>
                            <input
                                type="text"
                                id="addressOpt"
                                name="addressOpt"
                                className="p-3 border border-box outline-primary"
                                placeholder="Apartment or Suite"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="city" className="font-semibold">
                                Town/City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="flex flex-col gap-2 flex-1 w-32">
                            <label htmlFor="country" className="font-semibold">
                                Country
                            </label>
                            <select
                                name="country"
                                id="country"
                                className="p-3 border border-box outline-primary"
                                value={selectedCountry}
                                onChange={(e) =>
                                    setSelectedCountry(e.target.value)
                                }
                            >
                                {countries.map(({ country }, i) => (
                                    <option key={i} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 flex-1 w-32">
                            <label htmlFor="state">State</label>
                            <select
                                name="state"
                                id="state"
                                className="p-3 border border-box outline-primary"
                                value={selectedState}
                                onChange={(e) =>
                                    setSelectedState(e.target.value)
                                }
                            >
                                {getStates(selectedCountry).map((state, i) => (
                                    <option key={i} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="postcode">Zip / Postcode</label>
                            <input
                                type="number"
                                id="postcode"
                                name="postcode"
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
                            <label htmlFor="date" className="font-semibold">
                                Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="time">Time</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                className="p-3 border border-box outline-primary"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="comments" className="font-semibold">
                                Comments
                            </label>
                            <textarea
                                rows="5"
                                id="comments"
                                name="comments"
                                className="p-3 border border-box outline-primary"
                                placeholder="Any information or details you want to let us know in relation to your order and pick-up."
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="flex gap-2 flex-1">
                            <input
                                type="checkbox"
                                name="subscribe"
                                id="subscribe"
                            />
                            <p>
                                Subscribe to our products, services, and
                                marketing emails.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end gap-5">
                        <Link
                            to="/account"
                            className="bg-primary text-white px-24 text-sm py-3"
                        >
                            Place Order
                        </Link>
                    </div>
                </div>
            </div>
            <OrderSummary checkout />
        </div>
    );
}
