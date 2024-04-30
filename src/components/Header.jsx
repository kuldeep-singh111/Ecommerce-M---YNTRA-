import React from 'react'
import { MdPerson } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Header = () => {

    const bag = useSelector(store => store.bag);

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleClose = () => {
        setShowMenu(false);
    }


    return (
        <>
            <header>
                <div className="logo_container">
                    <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
                </div>


                <nav className="nav_bar">
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Kids</a>
                    <a href="#">Home & Living</a>
                    <a href="#">Beauty</a>
                    <a href="#">Studio <sup>New</sup></a>
                </nav>
                <div className="search_bar">
                    <span className="material-symbols-outlined search_icon"><CiSearch /></span>
                    <input className="search_input" placeholder="Search for products, brands and more" />
                </div>



                <div className="action_bar">
                    <div className="action_container">
                        <MdPerson />
                        <span className="action_name">Profile</span>

                    </div>

                    <div className="action_container">
                        <FaHeartbeat />
                        <span className="action_name">Wishlist</span>
                    </div>

                    <Link className="action_container" to="/bag">
                        <FaBagShopping />
                        <span className="action_name">Bag</span>
                        <span className="bag-item-count">{bag.length}</span>
                    </Link>
                    <div className="menubar" onClick={toggleMenu}>
                        <IoMdMenu />
                    </div>

                </div>

                {showMenu && (
                    <div className='responsive'>
                        <span className='close-icon' onClick={toggleClose}><IoMdClose /></span>

                        <nav className="res-nav">
                            <a href="#">Men</a>
                            <a href="#">Women</a>
                            <a href="#">Kids</a>
                            <a href="#">Home & Living</a>
                            <a href="#">Beauty</a>
                            <a href="#">Studio <sup>New</sup></a>
                        </nav>
                        <div className="res-search">
                            <span className="material-symbols-outlined search_icon"><CiSearch /></span>
                            <input className="res-search_input" placeholder="Search for products, brands and more" />
                        </div>
                    </div>
                )}



            </header>

        </>
    )
}

export default Header