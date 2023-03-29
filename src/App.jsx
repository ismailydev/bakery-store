import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products, Cart, Checkout, Account } from "./pages";
import { Header, NavBar, Breadcrumb, Footer } from "./components";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <NavBar />
            <Breadcrumb />
            <div className="max-w-6xl mx-auto">
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
