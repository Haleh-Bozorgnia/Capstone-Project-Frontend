import { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import logo from "../assets/icons/LOGO.jpg";


function Header() {
  const[nav,setNav]= useState(false)
  const handleNav =()=>{
    setNav(!nav)
  }
  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240] mx-auto px-4 flex  items-center h-full justify-between">
        <div>
          <img src={logo} alt="bran" className="mt-10" width={150} height={46} />
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <li className="p-4">
              <button>
                <Link to="/" className="hover:text-[#00d8ff]">
                  Home
                </Link>
              </button>
            </li>
            <li className="p-4">
              <button>
                <Link to="/create" className="hover:text-[#00d8ff]">
                  Add Services
                </Link>
              </button>
            </li>
            <li className="p-4">
              <button>
                <Link to="/index" className="hover:text-[#00d8ff]">
                  Services
                </Link>
              </button>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose className="text-white" size={30} />
          ) : (
            <AiOutlineMenu className="text-white" size={30} />
          )}
        </div>
        <div>
          <ul
            className={
              nav
                ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center "
                : "absolute left-[-100%]"
            }
          >
            <li className="p-4 text-xl">
              <button>
                <Link to="/">Home</Link>
              </button>
            </li>
            <li className="p-4 text-xl">
              <button>
                <Link to="/index">Services</Link>
              </button>
            </li>
            <li className="p-4 text-xl">
              <button>
                <Link to="/create">Add Services</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
