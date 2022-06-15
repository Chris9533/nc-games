import { useState, useEffect } from "react"
import { getUsers } from "../utils/api"
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { UserContext } from "../contexts/user";
import { useContext } from "react";
import { Link } from "react-router-dom"

const Users = ({setActiveUser}) => {

    const [users, setUsers] = useState([])
    const activeUser = useContext(UserContext);

    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users)
        })
    }, [])

    
        return (
            <>
            <main>
            
              {users.map((user) => {
                return (
                  
                  <CCard key={user.username}className="itemcard" style={{ width: '18rem' }}>
            <CCardTitle>{user.username}</CCardTitle>
          <CCardBody>
          <CCardImage orientation="top" className="loginimage" src={user.avatar_url} />
            <CCardText>
              {user.name}
            </CCardText>
            <Link className="navbutton" to="/">
            <CButton disabled={activeUser != null}onClick={() => setActiveUser(user)}>Login</CButton> 
            </Link>
          </CCardBody>
        </CCard>
              )})
        }
        
        
        </ main>
        </>
        )

}

export default Users;