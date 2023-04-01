export default function OrderCard({
    name,
    image,
    orderNumber,
    date,
    status,
    price,
}) {
    return (
        <div className="border border-box p-5 flex flex-col md:flex-row">
            <div>
                <img
                    src={image}
                    alt={name}
                    className="w-full md:w-24 md:h-24 object-cover"
                />
            </div>
            <div className="flex flex-col md:flex-row gap-4 flex-1 items-start md:items-center justify-between md:px-12 py-4 md:py-0">
                <div className="flex flex-col gap-1">
                    <p className="text-tertiary text-sm">Order Number</p>
                    <p className="font-semibold">{orderNumber}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-tertiary text-sm">Pick-up Date</p>
                    <p className="font-semibold">{date}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-tertiary text-sm">Status</p>
                    <p className="font-semibold">{status}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-tertiary text-sm">Order Amount</p>
                    <p className="font-semibold">${price}</p>
                </div>
            </div>
            <div className="inline-flex gap-2 items-center">
                <button className="px-6 py-3 text-sm border border-secondary">
                    Repeat Order
                </button>
                <button className="px-6 py-3 text-sm text-white bg-primary border border-primary">
                    View Details
                </button>
            </div>
        </div>
    );
}
