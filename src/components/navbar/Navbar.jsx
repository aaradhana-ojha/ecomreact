import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem("users"));
    // console.log(user);
     // navigate 
     const navigate = useNavigate();
     const logout = () => {
        localStorage.clear('users');
        navigate('/login')
     }

      // CartItems
    const cartItems = useSelector((state) => state.cart);


   
    const [showMenu, setShowMenu] = useState(false);


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const navList = (
        <ul className={`lg:flex space-x-7 text-black font-medium text-md ${showMenu ? 'block' : 'hidden'}`}>
            <li><Link to={'/'} className="hover:text-gray-200">Home</Link></li>
            <li><Link to={'/allproduct'} className="hover:text-gray-200">All Products</Link></li>
            {!user ? <li><Link to={'/signup'} className="hover:text-gray-200">Signup</Link></li> : ""}
            {!user ? <li><Link to={'/login'} className="hover:text-gray-200">Login</Link></li> : ""}
            {user?.role === "user" &&  <li><Link to={'/user-dashboard'} className="hover:text-gray-200">{user?.name}</Link></li>}
            {user?.role === "admin " &&  <li><Link to={'/admin-dashboard'}>{user?.name}</Link> {/* Admin Dashboard */}</li>}
            {user && <li className="hover:text-gray-200 cursor-pointer" onClick={logout}>Logout</li>
}           <li><Link to={'/cart'} className="hover:text-gray-200">Cart({cartItems.length})</Link></li>
        </ul>
    );

    return (
        <nav className="bg-gradient-to-r from-white to-blue-100  shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
                <div className="flex-shrink-0 mr-10">
                    <Link to={'/'}>
                        <h2 className="font-bold text-black text-2xl">E-com</h2>
                    </Link>
                </div>
                <div className="hidden lg:flex flex-grow justify-between items-center">
                    <div className="flex items-center">
                        <div className="mr-4"><SearchBar /></div>
                    </div>
                    {navList}
                </div>
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className={`h-6 w-6 text-black ${showMenu ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`lg:hidden ${showMenu ? 'block' : 'hidden'}`}>
                <div className="flex flex-col items-center">
                    <SearchBar />
                    {navList}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
