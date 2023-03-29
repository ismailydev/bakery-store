import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products, Cart, Checkout, Orders } from "./pages";
import { Header, NavBar, Footer } from "./components";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
