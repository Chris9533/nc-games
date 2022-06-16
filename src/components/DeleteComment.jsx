import { CButton } from '@coreui/react';
import { UserContext } from "../contexts/user";
import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { deleteComment } from '../utils/api';

const DeleteComment = ({username, comment_id, setIsDeleted, disableButton, setDisableButton}) => {
    
    const user = useContext(UserContext);
    const [isError, setIsError] = useState(false)
    
    

    const handleDelete = () => {
        setDisableButton(true)
        deleteComment(comment_id).then(() => {
            setIsDeleted((currentVal) => {return !currentVal})
        })
        .catch(() => {
            setIsError(true)

        })
    }
    if (isError) {
        return <p>Oops something went wrong, your message was not deleted</p>
    }

    else if (user === null) {
        return <p>Please <Link  to="/login">Login</Link> to remove a comment</p>
    } else if (user.username !== username) {
        return (
            <p>You can only delete your own comments</p>
        )

    } else {
        return (
           
    <CButton disabled={disableButton} onClick={() => {handleDelete()}}>Delete Comment</CButton>
        )

    }

}

export default DeleteComment;