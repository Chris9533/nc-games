import { useState, useEffect } from "react"
import { getUsers } from "../utils/api"
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { UserContext } from "../contexts/user";
import { useContext } from "react";

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
            <CButton disabled={activeUser != null}onClick={() => setActiveUser(user)}>Login</CButton> 
          </CCardBody>
        </CCard>
              )})
        }
        
        
        </ main>
        </>
        )

}

export default Users;