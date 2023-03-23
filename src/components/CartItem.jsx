import { XMarkIcon } from "@heroicons/react/24/solid";

export default function CartItem({
    name,
    image,
    price,
    category,
    weight,
    type,
    pack,
}) {
    return (
        <div className="flex gap-8 border-b border-box py-8">
            <div>
                <img
                    src={image}
                    alt={name}
                    className="w-32 h-40 object-cover"
                />
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <div className="flex justify-between font-bold text-lg">
                    <h3>
                        {name} {pack && <span>({pack} Pack)</span>}
                    </h3>
                    <p>${price}</p>
                </div>
                <div className="text-tertiary text-sm flex flex-col gap-2">
                    {weight && <p>Weight: {weight}</p>}
                    {type && <p>Type: {type}</p>}
                    <p>Category: {category}</p>
                </div>
                <div className="mt-auto flex justify-between text-tertiary">
                    <select name="" id="" className="border border-box w-12">
                        {Array.from({ length: 6 }, (_, val) => val + 1).map(
                            (num, i) => (
                                <option value={num} defaultValue={1} key={i}>
                                    {num}
                                </option>
                            )
                        )}
                    </select>
                    <button className="flex items-center text-tertiary text-sm gap-1">
                        <XMarkIcon className="w-4 h-4" />
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
