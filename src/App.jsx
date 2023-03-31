import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products, Cart, Checkout, Account } from "./pages";
import { Header, NavBar, Breadcrumb, Footer } from "./components";

function App() {
    return (
        <BrowserRouter>
            <div className="z-50 fixed top-0 left-0 w-full">
                <Header />
                <NavBar />
            </div>
            <div className="max-w-6xl mx-auto mt-24">
                <Breadcrumb />
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
