import Image from "next/image";
import { Search } from "lucide-react";

const Topbar = () => {
    return (
        <div className="flex items-center justify-start w-full border-b border-gray-300 py-4">
            {/* Logo Section */}
            <div>
                <Image src="/images/logo.png" alt="Logo" width={200} height={30} />
            </div>

            {/* Search Box */}
            <div className="relative w-[549px] ml-4">
                <input
                    type="search"
                    placeholder="Search for product, delivered to your door..."
                    className="w-full border border-gray-300 rounded px-4 py-2 pr-10 focus:[box-shadow:0px_3px_4px_rgba(0,0,0,0.14)] focus:outline-none transition-shadow duration-300"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
            </div>

            {/* Icons or Extra Options */}
            <div className="flex gap-4 ml-4">
                <button>Cart 🛒</button>
                <button>Login 🔐</button>
            </div>
        </div>
    );
};

export default Topbar;
