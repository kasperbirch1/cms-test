import React from 'react'
import { Link } from "gatsby"


function MenuLiLinks({ setMenuIsOpen }) {
    return (
        <>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/" >Home</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/" >about us</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/" >blog</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/" >events</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/gallery" >gallery</Link></li>
            <li><Link onClick={() => { setMenuIsOpen(false) }} to="/contact" >contact us</Link></li>
        </>
    )
}

export default MenuLiLinks
