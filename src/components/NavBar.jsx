import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";

import {
    layoutList,
    layoutListB,
    logOut,
    logo,
    shoppingBag,
    user,
    userCircle,
} from "../constants";

export default function NavBar() {
    const location = useLocation();
    const products = useSelector(selectCartItems);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="p-4 md:px-0 shadow-md bg-white">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link to="/" className="w-12 md:w-32">
                    <img src={logo} alt="I&I Rose Garden" className="w-7 h-7" />
                </Link>
                <div className="flex-1">
                    <select className="flex items-center outline-primary">
                        <option value="Shop">Shop</option>
                        <option value="Sell">Sell</option>
                        <option value="Products">Products</option>
                    </select>
                </div>
                <div className="flex gap-12">
                    <Link to="/cart" className="relative text-white">
                        <img
                            src={shoppingBag}
                            alt="shopping bag icon"
                            className="w-5 h-5"
                        />
                        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full p-[6px] flex items-center justify-center bg-accent text-[8px] border border-white">
                            {products.length}
                        </div>
                    </Link>
                    <div className="relative">
                        <img
                            src={userCircle}
                            alt="user icon"
                            className="w-5 h-5 cursor-pointer"
                            onClick={() => setMenuOpen(!menuOpen)}
                        />
                        {menuOpen && (
                            <div
                                onClick={() => setMenuOpen(false)}
                                className="z-[100] bg-white border border-box/25 absolute right-0 top-6 shadow-lg w-32 h-28 flex items-center justify-center"
                            >
                                <ul className="flex flex-col gap-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <img
                                            src={user}
                                            alt="user icon"
                                            className="w-4 h-4"
                                        />
                                        <p>Account</p>
                                    </li>
                                    <li
                                        className={`${
                                            location.pathname === "/account"
                                                ? "text-primary"
                                                : ""
                                        }`}
                                    >
                                        <Link
                                            to="/account"
                                            className="flex items-center gap-2"
                                        >
                                            <img
                                                src={
                                                    location.pathname ===
                                                    "/account"
                                                        ? layoutList
                                                        : layoutListB
                                                }
                                                alt="user icon"
                                                className="w-4 h-4"
                                            />
                                            <p>Orders</p>
                                        </Link>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img
                                            src={logOut}
                                            alt="user icon"
                                            className="w-4 h-4"
                                        />
                                        <p>Log out</p>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
