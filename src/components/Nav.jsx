import { Link } from "react-router-dom"
import { CButton } from '@coreui/react';
const Nav = () => {
    return (
        <ul id="navlist" >
            <Link className="navbutton" to="/"><CButton>Homepage</CButton></Link>
            <Link  className="navbutton" to="/reviews"><CButton>Reviews</CButton></Link>
            <Link className="navbutton" to="/login"><CButton>Login</CButton></Link>
        </ul>
    )
}

export default Nav;