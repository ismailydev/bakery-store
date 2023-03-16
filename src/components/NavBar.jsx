import { logo, shoppingBag, user } from "../constants";

export default function NavBar() {
    return (
        <div className="py-4 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="w-32">
                    <img src={logo} alt="I&I Rose Garden" className="w-7 h-7" />
                </div>
                <div className="flex-1">
                    <select name="" id="" className="flex items-center">
                        <option value="Shop">Shop</option>
                        <option value="Sell">Sell</option>
                        <option value="Products">Products</option>
                    </select>
                </div>
                <div className="flex gap-12">
                    <div className="relative text-white">
                        <img
                            src={shoppingBag}
                            alt="shopping bag icon"
                            className="w-5 h-5"
                        />
                        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full p-[6px] flex items-center justify-center bg-accent text-[8px] border border-white">
                            3
                        </div>
                    </div>
                    <img
                        src={user}
                        alt="user icon"
                        className="w-[22px] h-[22px] p-0.5 rounded-full border-[1.5px] border-black"
                    />
                </div>
            </div>
        </div>
    );
}
