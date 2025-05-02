import { Grid2x2 } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='w-full h-[80px] flex items-center'>

            {/* Category List */}
            <div className='flex'>
                <Grid2x2 />
                <h2 className='ml-4 mr-4 font-boldß'>All Categories</h2>
                <span className="w-[1.5px] h-8 bg-gray-300 font-bold"></span>
            </div>

            {/* Languange */}
            <div className="ml-8">
                <select className="border-none border-gray-300 rounded px-3 py-2">
                    <option value="en">Home</option>
                    <option value="en">English</option>
                    <option value="en">English</option>
                </select>
            </div>

            {/* Languange */}
            <div className="ml-8">
                <select className="border-none border-gray-300 rounded px-3 py-2">
                    <option value="en">Shop</option>
                    <option value="en">English</option>
                    <option value="en">English</option>
                </select>
            </div>


            {/* Languange */}
            <div className="ml-8">
                <select className="border-none border-gray-300 rounded px-3 py-2">
                    <option value="en">Product</option>
                    <option value="en">English</option>
                    <option value="en">English</option>
                </select>
            </div>

            {/* Languange */}
            <div className="ml-8">
                <select className="border-none border-gray-300 rounded px-3 py-2">
                    <option value="en">Product</option>
                    <option value="en">English</option>
                    <option value="en">English</option>
                </select>
            </div>

            {/* Languange */}
            <div className="ml-8">
                <select className="border-none border-gray-300 rounded px-3 py-2">
                    <option value="en">Blog</option>
                    <option value="en">English</option>
                    <option value="en">English</option>
                </select>
            </div>

            {/* Button */}
            <div className='ml-auto'>
                <button className='ml-8 border border-gray-300 bg-[#009245] text-white rounded px-10 font-bold py-[12px]'>Hot Deals</button>
            </div>
        </div>
    )
}

export default Navbar
