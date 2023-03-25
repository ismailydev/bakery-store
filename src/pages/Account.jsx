import { OrderCard } from "../components";
import { data as products } from "../constants";

export default function Account() {
    return (
        <div className="min-h-screen py-12">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">My Orders</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 py-8 pb-24">
                {products.map((product) => (
                    <OrderCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}
