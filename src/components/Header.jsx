import { Link } from "react-router-dom"
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";


const Header = () => {
    const  [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const content = <>
        <div className="header1 lg:hidden block absolute top-16 w-full left-0 right-0 bg-white transition">
            <ul className="text-center text-xl p-20">
                <li className="my-4 py-4 border-b border-slate-800">
                    <Link to="/products">Products</Link>
                </li>
                <li className="my-4 py-4 border-b border-slate-800">
                    <Link to="/about">About</Link>
                </li>
                <li className="my-4 py-4 border-b border-slate-800">
                    <Link to="/contact">Contact</Link>
                </li >
                <li className="my-4 py-4 border-b border-slate-800">
                    <Link to="/account">Account</Link>
                </li>
                <li className="my-4 py-4 border-b border-slate-800">
                    <Link to="/cart"><HiOutlineShoppingBag /></Link>
                </li>
            </ul>
        </div>
    </>
    

    return (
        <nav className="header1 ">
            <div className="h-10vh flex justify-between z-2 text-black lg:py-5 px-20 py-4 flex-1">
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold">
                        
                        <Link to="/"><img src="/images/logo.png" width="125px" alt="Logo image" /></Link>
                    </span>
                </div>
                <div className="sticky lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <li className=" link">
                                <Link to="/products">Products</Link>
                            </li>
                            <li className=" link">
                                <Link to="/about">About</Link>
                            </li>
                            <li className=" link">
                                <Link to="/contact">Contact</Link>
                            </li >
                            <li className=" link">
                                <Link to="/account">Account</Link>
                            </li>
                            <li className="flex items-center link">
                                <Link to="/cart"><HiOutlineShoppingBag /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                <button className="block sm:hidden transition" onClick={handleClick}>
                    {click ? <IoClose /> : <FaBars />  }
                </button>

            </div>
        </nav>
    )
}

export default Header