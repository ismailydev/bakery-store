import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
    const location = useLocation();

    const getPath = (path) => {
        switch (path) {
            case "/":
                return getBreadcrumbs([
                    { name: "Home", link: "/" },
                    { name: "Products", link: "/" },
                ]);
            case "/checkout":
                return getBreadcrumbs([
                    { name: "Product", link: "/" },
                    { name: "Shopping Cart", link: "/cart" },
                    { name: "Checkout", link: "/checkout" },
                ]);
            case "/cart":
                return getBreadcrumbs([
                    { name: "Product", link: "/" },
                    { name: "Shopping Cart", link: "/cart" },
                ]);
            case "/account":
                return getBreadcrumbs([
                    { name: "Home", link: "/" },
                    { name: "Account", link: "/account" },
                ]);
        }
    };

    const getBreadcrumbs = (arr) => {
        return (
            <div className="flex">
                {arr.map((item, i) => (
                    <div className="flex">
                        <Link to={item.link} key={i}>
                            <span className={`${i === 0 ? "hidden" : ""} mx-5`}>
                                |
                            </span>
                            {item.name}
                        </Link>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="pt-12 max-w-6xl mx-auto text-tertiary text-sm">
            {getPath(location.pathname)}
        </div>
    );
}
