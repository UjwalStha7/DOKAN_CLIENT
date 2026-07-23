import { Link, NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { useEffect, useState } from "react"
import { fetchCartItems } from "../../store/cartSlice"
import cart from '../../media/cart.png'
import logo from '../../media/logo.png'
import user from '../../media/user.png'
import menu from '../../media/menu.png'
import back from '../../media/back.png'
import { logoutUser } from "../../store/authSlice"

function Navbar(){
        const reduxToken = useAppSelector((store)=>store.auth.user.token)
        const {items} = useAppSelector((store)=>store.cart)
        const isLoggedIn = !!reduxToken
        const dispatch = useAppDispatch()
        useEffect(()=>{
            if(isLoggedIn){
                dispatch(fetchCartItems())
            }
            // if(reduxToken && localStorageToken){
            //     setIsLoggedIn(true)
            // }
        },[isLoggedIn]) 

        {/* menu bar responsive*/}
        const [visible, setVisible] = useState(false);
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const handleLogout = () => {
            dispatch(logoutUser());
        };
        useEffect(() => {
            document.body.style.overflow = visible ? "hidden" : "";
            return () => { document.body.style.overflow = ""; };
        }, [visible]);
    return(
        <>
            <div className="flex items-center justify-between py-5 font-medium font-cooper px-12">
                <Link to="/" className="w-15 mr-3 flex items-center text-2xl">
                    <img src={logo} className="h-10 w-10 " />
                    <h1>Daily<span className="text-[#4fc09a]">Bite</span></h1>
                </Link>
                <ul className="hidden sm:flex gap-5 text-md text-gray-700 font-bogartMedium">
                  <NavLink to="/" className="flex flex-col items-center gap-1 px-4">
                        <p>HOME</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                  </NavLink>
                  <NavLink to="/products" className="flex flex-col items-center gap-1 px-4">
                        <p>PRODUCT</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                  </NavLink>
                  <NavLink to="/about" className="flex flex-col items-center gap-1 px-4">
                        <p>ABOUT</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                  </NavLink>
                </ul>
                <div className="flex items-center gap-6">
                    {
                        isLoggedIn ? (
                                <>
                                    <div className="relative z-50">
                                        <img className="h-5.5 w-5.5 cursor-pointer" src={user} alt="user profile" onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
                                            <div className={`absolute right-0 mt-3 z-50 transition-all duration-300 ease-out origin-top-right ${
                                                isDropdownOpen
                                                    ? "opacity-100 visible scale-100"
                                                    : "opacity-0 invisible scale-95 pointer-events-none"
                                                    }`}>
                                                <div className="flex flex-col w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                                                    <div className="px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors duration-150" onClick={() => setIsDropdownOpen(false)}>
                                                        <Link to="/my-profiles">
                                                        <p className="text-sm font-medium text-gray-700">My Profile</p></Link>
                                                    </div>
                                                    <Link to="/my-orders" className="px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors duration-150" onClick={() => setIsDropdownOpen(false)}>
                                                        <p className="text-sm font-medium text-gray-700">Orders</p>
                                                    </Link>
                                                    <div className="px-4 py-3 cursor-pointer hover:bg-red-50 transition-colors duration-150 border-t border-gray-100" onClick={() => {
                                                            setIsDropdownOpen(false);
                                                            handleLogout();
                                                        }}>
                                                        <p className="text-sm font-medium text-red-600">Logout</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    <Link to="/my-cart" className="relative">
                                        <img src={cart} className="h-6 w-6 min-w-6" alt="" />
                                        <span className="absolute -top-3.5 -right-3 text-black text-xs font-bold h-7 w-4 flex items-center justify-center font-izmic">
                                            {items.length}
                                        </span>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to='/login'><img className="h-5.5 w-5.5 cursor-pointer" src={user} alt="" /></Link>
                                    <Link to="/login" className="relative">
                                        <img src={cart} className="h-6 w-6 min-w-6" alt="" />
                                    </Link>
                                </>
                                
                            )
                        }       
                    <img onClick={()=>setVisible(true)} src={menu} className="w-5 cursor-pointer sm:hidden" alt=""/>
                </div>
                {/* side bar menu for small screen*/}
                <div className={`fixed inset-0 z-60 overflow-hidden bg-white transition-all duration-300 ${visible ? "w-full" : "w-0"}`}>
                    <div className="flex flex-col text-gray-600 justify-center h-full">
                        <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-4 border-b border-gray-300 cursor-pointer text-gray-600">
                            <img className="h-4 rotate-180" src={back} alt="" />
                            <p>Back</p>
                        </div>
                        <div className="flex flex-col flex-1 items-center justify-center gap-6 text-gray-600 mt-10">
                            <NavLink onClick={() => setVisible(false)} className="py-2 text-lg" to="/">
                                <p>HOME</p>
                                <hr className="border-none h-[1.5px] bg-gray-700 hidden" />
                            </NavLink>
                            <NavLink onClick={() => setVisible(false)} className="py-2 text-lg" to="/products">
                                <p>PRODUCT</p>
                                <hr className="border-none h-[1.5px] bg-gray-700 hidden" />
                            </NavLink>
                            <NavLink onClick={() => setVisible(false)} className="py-2 text-lg" to="/about">
                                <p>ABOUT</p>
                                <hr className="border-none h-[1.5px] bg-gray-700 hidden" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
        
    )
}
export default Navbar