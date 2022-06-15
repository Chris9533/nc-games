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
                <p id="activeuser">{`Hello ${user.username}`}</p>
                <CButton className="logoutbutton" onClick={() => setActiveUser(null)}>Logout</CButton>
            </ul>
        )
    }
}

export default Nav;