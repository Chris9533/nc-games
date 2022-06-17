import { Link } from "react-router-dom"
import { CButton } from '@coreui/react';
import { UserContext } from "../contexts/user";
import { useContext } from "react";
const Nav = ({setActiveUser}) => {

    const user = useContext(UserContext);


    if (user === null) {

        return (
            <ul id="navlist" >
                <Link className="navbutton" to="/"><CButton>Homepage</CButton></Link>
                <Link  className="navbutton" to="/reviews"><CButton>Reviews</CButton></Link>
                <Link className="navbutton" to="/login"><CButton>Users</CButton></Link>
            </ul>
        )
    } else {
        return (
            <ul id="navlist" >
                <Link className="navbutton" to="/"><CButton>Homepage</CButton></Link>
                <Link  className="navbutton" to="/reviews"><CButton>Reviews</CButton></Link>
                <div id="loggedinuser"><p id="activeuser">{user.username}</p><img id="loggedinimage" src={user.avatar_url} alt="Logged in user" />
                <CButton className="logoutbutton" onClick={() => setActiveUser(null)}>Logout</CButton></div>
            </ul>
        )
    }
}

export default Nav;