import { useState } from "react";
import { removeFromCart, updateCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { toast } from "react-hot-toast";

export default function CartItem({
    id,
    image,
    name,
    category,
    pack,
    weight,
    type,
    price,
    quantity,
}) {
    const [qty, setQty] = useState(quantity);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setQty(e.target.value);
        dispatch(updateCart({ id, qty: +e.target.value }));
    };

    return (
        <div className="flex gap-8 border-b border-box py-8">
            <div>
                <img
                    src={image}
                    alt={name}
                    className="w-32 h-40 object-cover border border-box"
                />
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <div className="flex flex-col md:flex-row justify-between font-bold text-lg">
                    <h3>
                        {name} {pack && <span>({pack} Pack)</span>}
                    </h3>
                    <p className="py-2 md:py-0">${qty * price}</p>
                </div>
                <div className="text-tertiary text-sm flex flex-col gap-2">
                    {weight && <p>Weight: {weight}</p>}
                    {type && <p>Type: {type}</p>}
                    <p>Category: {category}</p>
                </div>
                <div className="mt-auto flex flex-col md:flex-row gap-4 justify-between text-tertiary">
                    <select
                        name="quantity"
                        id="quantity"
                        className="border border-box w-12"
                        value={qty}
                        onChange={handleChange}
                    >
                        {Array.from({ length: 6 }, (_, val) => val + 1).map(
                            (num, i) => (
                                <option defaultValue={num} key={i}>
                                    {num}
                                </option>
                            )
                        )}
                    </select>
                    <button
                        onClick={() => {
                            setQty((prevQty) => prevQty - 1);
                            dispatch(removeFromCart({ id }));
                            toast.error("Item removed from cart");
                        }}
                        className="flex items-center text-tertiary text-sm gap-1"
                    >
                        <XMarkIcon className="w-4 h-4" />
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
