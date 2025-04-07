import { Link, NavLink } from "react-router";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { ImCancelCircle } from "react-icons/im";
import { FaRegStar } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

export default function Header() {
  const navLink = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Sign Up", path: "/signup" },
  ];

  const [showProfile, setShowProfile] = useState(false);
  return (
    <header>
      <div className="container flex items-center justify-between  flex-wrap py-10 px-5 m-auto">
        <Link to={"/"} className="font-bold text-[24px] tracking-[3%]">
          Exclusive
        </Link>
        <nav>
          <ul className="flex flex-wrap gap-5">
            {navLink.map((link) => (
              <li key={link.name} className="text-black  ">
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex  items-center gap-5">
          <div className="search flex items-center gap-2 bg-[#F5F5F5] p-1 rounded">
            <input type="text" placeholder="What are you looking for?" className="bg-[#F5F5F5] py-[7px] pr-[12px] pl-[20px]  outline-0 border-0" />
            <IoIosSearch />
          </div>
          <div className="text-[20px]">
            <CiHeart />
          </div>
          <div className="text-[20px]">
            <IoCartOutline />
          </div>
          <div className="relative cursor-pointer">
            <FiUser onClick={() => setShowProfile((prev) => !prev)} className="bg-[#DB4444]  text-[27px] rounded-full  p-[6px] text-[#FFFFFF]" />
            {showProfile && (
              <div className="w-[224px] h-[240px]  rounded absolute right-0 top-10 text-white  bg-[#00000094]">
                <div className="flex gap-4 p-3 items-center">
                  <FiUser className="text-2xl" />
                  Manage My Account
                </div>
                <div className="flex gap-4 p-3 items-center">
                  <LuShoppingBag className="text-2xl" />
                  My Order
                </div>
                <div className="flex gap-4 p-3 items-center">
                  <ImCancelCircle className="text-2xl" />
                  My Cancellations
                </div>
                <div className="flex gap-4 p-3 items-center">
                  <FaRegStar className="text-2xl" />
                  My Reviews
                </div>
                <div className="flex gap-4 p-3 items-center">
                  <CiLogout className="text-2xl" />
                  Logout
                                  </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
