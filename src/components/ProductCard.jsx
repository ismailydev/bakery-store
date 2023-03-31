import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductCard({
    id,
    name,
    image,
    type,
    weight,
    pack,
    category,
    price,
    stock,
    rating,
    reviews,
    orderNumber,
    date,
    status,
}) {
    const dispatch = useDispatch();

    const addProductToCart = () => {
        dispatch(
            addToCart({
                id,
                name,
                image,
                type,
                weight,
                pack,
                category,
                price,
                stock,
                rating,
                reviews,
                orderNumber,
                date,
                status,
            })
        );
    };

    return (
        <div>
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="object-cover w-full h-52"
                />
                <div
                    className={`absolute top-4 left-4 px-3 py-1 text-white text-xs ${
                        stock === "New Arrival" ? "bg-primary" : "bg-accent"
                    }`}
                >
                    {stock}
                </div>
            </div>
            <div className="p-5 border border-box text-center">
                <p className="text-xs text-tertiary">{category}</p>
                <div className="flex flex-col">
                    <h3 className="font-bold text-lg">
                        {name} <br />(
                        {type ||
                            `${pack ? pack + " Pack | " + weight : weight}`}
                        )
                    </h3>
                </div>
                <p className="font-bold text-2xl py-2">${price}</p>
                <div className="text-primary flex justify-center gap-2 py-2 pb-4">
                    <div className="flex">
                        {Array.from({ length: rating }, () => true).map(
                            (_, i) => (
                                <StarIconSolid key={i} className="h-4 w-4" />
                            )
                        )}
                        {Array.from({ length: 5 - rating }, () => true).map(
                            (_, i) => (
                                <StarIconOutline key={i} className="h-4 w-4" />
                            )
                        )}
                    </div>
                    <p className="font-bold text-xs">{reviews}</p>
                </div>
                <button
                    onClick={addProductToCart}
                    className="bg-secondary text-white w-full py-2 text-sm"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
