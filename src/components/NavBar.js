import React from "react"
import { NavLink, useHistory} from "react-router-dom"

const novelheader ={
        display: "flex",
        background: "#e2352f",
        opacity: ".8",
        height: "4rem",
        padding: "1rem",
        color: "white",
}

function NavBar({ setIsLoggedIn, isLoggedIn, setMyNovel, setUser}) {
    const history = useHistory();

    function handleLogout() {
        setIsLoggedIn(false);
        setMyNovel([]);
        setUser(null)
        history.push("/login");
    }
    
    let link = <NavLink  to="/login">Login</NavLink>
    let logout = null
        if (isLoggedIn){
           link = <NavLink  to="/MyNovelList">My Novels</NavLink>
           logout = <button onClick={handleLogout}>LogOut</button>
        }

    

    return (
        <nav style={novelheader}>
            <NavLink  exact to="/">Home</NavLink>
            <NavLink  to="/novellist">Novels</NavLink>
            {link}
            {logout}
        </nav>
    )
}

export default NavBar