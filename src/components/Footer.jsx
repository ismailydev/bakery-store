import { logo, facebookG, instagramG, twitterG } from "../constants";

export default function Footer() {
    return (
        <div className="bg-light">
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-5 py-12 pb-24 max-w-6xl mx-auto">
                    <div className="flex flex-col gap-4">
                        <a href="#">
                            <img
                                src={logo}
                                alt="I&I Rose Garden"
                                className="w-7 h-7"
                            />
                        </a>
                        <div className="flex gap-5">
                            <img
                                src={facebookG}
                                alt="facebook link"
                                className="w-5 h-5 object-contain"
                            />
                            <img
                                src={twitterG}
                                alt="twitter link"
                                className="w-5 h-5 object-contain"
                            />
                            <img
                                src={instagramG}
                                alt="instagram link"
                                className="w-5 h-5 object-contain"
                            />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold">Support</h4>
                        <ul className="text-tertiary py-2 flex flex-col gap-2">
                            <li>Contact Us</li>
                            <li>FAQs</li>
                            <li>In-Store Pickup</li>
                            <li>Return Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold">Shop</h4>
                        <ul className="text-tertiary py-2 flex flex-col gap-2">
                            <li>Cookies</li>
                            <li>Drinks</li>
                            <li>Toppings</li>
                            <li>Snacks</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold">Company</h4>
                        <ul className="text-tertiary py-2 flex flex-col gap-2">
                            <li>Our Story</li>
                            <li>Careers</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy & Cookie Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold">Contact</h4>
                        <ul className="text-tertiary py-2 flex flex-col gap-2">
                            <li>
                                <a href="tel:6177757865">(617) 775-7865</a>
                            </li>
                            <li>
                                <a href="mailto:support@mail.com">
                                    support@mail.com
                                </a>
                            </li>
                            <li>2 Maple Street, Boston, MA 89898</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-box text-tertiary w-full text-center py-4">
                    <p>
                        Copyright (c) 2023. I & I Rose Garden. All Rights
                        Reserved
                    </p>
                </div>
            </div>
        </div>
    );
}
