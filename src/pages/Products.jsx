import { ProductCard } from "../components";
import { data as products } from "../constants";

export default function Products() {
    return (
        <div className="min-h-screen py-12">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">All Products</h1>
                <div className="flex items-center">
                    <p>Sort By:</p>
                    <select name="" id="">
                        <option value="Newest">Newest</option>
                        <option value="Popular">Popular</option>
                        <option value="Lowest Price">Lowest Price</option>
                        <option value="Highest Price">Highest Price</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5 py-12">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}
