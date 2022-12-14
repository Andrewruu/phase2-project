import React from "react"
import { NavLink } from "react-router-dom"

const novelheader ={
        display: "flex",
        background: "#e2352f",
        opacity: ".8",
        height: "4rem",
        padding: "1rem",
        color: "white",
}

function NavBar() {
 
    return (
        <nav style={novelheader}>
            <NavLink  exact to="/">Home</NavLink>
            <NavLink  to="/Novels">Novels</NavLink>
            <NavLink  to="/NewNovel">Add Novel</NavLink>
        </nav>
    )
}

export default NavBar