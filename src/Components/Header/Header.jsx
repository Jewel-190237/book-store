import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {

    const Links = <>
        <li id="link"><NavLink to="/">Home</NavLink></li>
        <li id="link1"><NavLink to="/listedBooks">Listed Books</NavLink></li>
        <li id="link2"><NavLink to="/pagesToRead">Pages to read</NavLink></li>
        <li id="link2"><NavLink to="/books">All Book</NavLink></li>
        <li id="link2"><NavLink to="/soldBooks">Sold Book</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            Links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        Links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn mr-2 bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;