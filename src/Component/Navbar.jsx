import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../Reducers/Authentication/AuthContext'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../Reducers/Cart/CartContext';
import { useProduct } from '../Reducers/Products/ProductContext';

const Navbar = () => {
    const { state, logout } = useAuth();
    const [dropDown, setDropDown] = useState(false);
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const { totalItems } = useCart().cartState;
    const {getAllProduct} = useProduct();

    const logoutHandler = () => {
        logout();
        navigate('/login');

    }
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 sticky top-0">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Build With Innvotion</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-md lg:flex-grow">
                    <NavLink to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4">
                        Categories
                    </NavLink>
                    <NavLink to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4">
                        Contact
                    </NavLink>
                    <NavLink to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white">
                        About Us
                    </NavLink>
                </div>
                <div className='flex gap-2'>

                    <div className="pt-2 relative mx-auto text-gray-600">
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search"
                            onChange={(e)=>{setSearch(e.target.value)}}
                            />
                        <button type="submit" onClick={()=>{getAllProduct(search)}} className="absolute right-0 top-0 mt-5 mr-4">
                            <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                                viewBox="0 0 56.966 56.966" xmlSpace="preserve"
                                width="512px" height="512px">
                                <path
                                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                    {state.isAuthenticated ?
                        (<div className='flex items-center gap-2 font-medium relative'>
                            <p className='text-slate-100'>{`${state.userData.firstName} ${state.userData.lastName}`}</p>
                            <img src={state.userData.image} className='rounded-full border-2 w-[40px]' alt="img" />

                            {dropDown ? (<IoMdArrowDropup onClick={() => { setDropDown(!dropDown) }} />) :
                                (<IoMdArrowDropdown onClick={() => { setDropDown(!dropDown) }} />)
                            }
                            {
                                dropDown && <div className='absolute top-9 left-6'>
                                    <div className='w-[20px] h-[20px] bg-slate-100 rounded-md absolute -top-2 rotate-45 right-[82px]'></div>
                                    <div className='w-[200px] h-[80px] bg-slate-100 rounded-md flex flex-col justify-center p-5 gap-2'>
                                        <div className='flex items-center gap-2'>
                                            <FaUser />
                                            <Link to="/profile"> Your Profile</Link>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <RiLogoutBoxRFill />
                                            <p onClick={logoutHandler} className='cursor-pointer'>Logout</p>
                                        </div>
                                    </div>

                                </div>
                            }
                            <div className='relative'>
                                <Link to="/cart">
                                    <FaShoppingCart size={25} />
                                </Link>
                                {
                                    totalItems > 0 &&
                                    <div className='absolute -top-2 left-4 rounded-full text-white bg-black h-5 w-5 text-center flex items-center justify-center'><p>{totalItems}</p></div>
                                }
                            </div>
                        </div>

                        ) :
                        (<Link to='/login' className="mt-2 py-2 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-teal-800 hover:text-slate-200 focus:z-10 focus:ring-4 focus:ring-gray-100">Login</Link>)}

                </div>
            </div>
        </nav>
    )
}

export default Navbar