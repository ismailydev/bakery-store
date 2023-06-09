import { facebook, instagram, phone, truck, twitter } from "../constants";

export default function Header() {
    return (
        <div className="text-xs bg-secondary text-white py-3 px-4 md:px-0">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 justify-between">
                <div className="flex flex-[1] items-center gap-2 justify-center md:justify-start">
                    <img src={truck} alt="truck icon" className="w-4 h-4" />
                    <p className="uppercase">Free In-Store Pickup</p>
                </div>
                <div className="flex justify-between flex-1">
                    <div className="flex flex-[0.75] justify-between">
                        <a href="#">Pick Up</a>
                        <a href="#">FAQ</a>
                        <a
                            href="tel:6177757865"
                            className="flex gap-1 items-center"
                        >
                            <img
                                src={phone}
                                alt="phone icon"
                                className="w-3 h-3"
                            />
                            <p>(617) 775-7865</p>
                        </a>
                    </div>
                    <div className="flex gap-4 justify-end">
                        <a href="">
                            <img
                                src={facebook}
                                alt="facebook link"
                                className="w-5 h-5"
                            />
                        </a>
                        <a href="">
                            <img
                                src={twitter}
                                alt="twitter link"
                                className="w-5 h-5"
                            />
                        </a>
                        <a href="">
                            <img
                                src={instagram}
                                alt="instagram link"
                                className="w-5 h-5"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
