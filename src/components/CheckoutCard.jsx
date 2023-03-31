export default function CheckoutCard({
    name,
    type,
    weight,
    pack,
    category,
    image,
    quantity,
}) {
    return (
        <div className="border border-box m-5 p-5 flex gap-4 items-center">
            <div>
                <img
                    src={image}
                    alt={name}
                    className="w-16 h-20 object-cover border border-box"
                />
            </div>
            <div className="text-xs text-tertiary flex flex-col gap-0.5">
                <h4 className="text-[13px] text-black font-bold">
                    {name} {pack && <span>({pack} Pack)</span>}
                </h4>
                {weight && <p>Weight: {weight}</p>}
                {type && <p>Type: {type}</p>}
                <p>Category: {category}</p>
                <p>Quantity: {quantity}</p>
            </div>
        </div>
    );
}
