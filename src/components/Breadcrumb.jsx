import { useLocation } from "react-router-dom";

export default function Breadcrumb() {
    const location = useLocation();

    const getPath = (path) => {
        switch (path) {
            case "/":
                return ["Home", "Products"];
            case "/checkout":
                return ["Product", "Shopping Cart", "Checkout"];
            case "/cart":
                return ["Product", "Shopping Cart"];
            case "/account":
                return ["Home", "Account"];
        }
    };

    return (
        <div className="py-5 max-w-6xl mx-auto text-tertiary text-sm">
            {getPath(location.pathname).join(" | ")}
        </div>
    );
}
