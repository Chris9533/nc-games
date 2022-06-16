import { useEffect, useState } from "react"
import { getComments } from "../utils/api"
import dayjs from 'dayjs'
import DeleteComment from "./DeleteComment"

const Comments = ({review_id, comments, setComments}) => {

    const [isDeleted, setIsDeleted]  = useState(false)
    const [disableButton, setDisableButton] = useState(false)
    


    useEffect(() => {
        getComments(review_id)
        .then((comments) => {
            setComments(comments);
            setDisableButton(false)

        })
    }, [review_id, setComments, isDeleted])
    return (
        <section className="comments">
        <h2>Comments</h2>

        {comments.map((comment) => {
            return (
                <section key={comment.comment_id} >

        <div className="card text-center">
  <div className="card-header">
    {comment.author}
  </div>
  <div className="card-body">
    <h5 className="card-title">Votes : {comment.votes}</h5>
    <p className="card-text">{comment.body}</p>
  </div>
  <div className="card-footer text-muted">
  {dayjs(comment.created_at).format("DD/MM/YYYY HH:mm:ss")}
  </div>
</div>
<DeleteComment  username={comment.author} comment_id={comment.comment_id} setIsDeleted={setIsDeleted} disableButton={disableButton} setDisableButton={setDisableButton}/>
</section>
            )
            
        })}
</ section>
    )
}

export default Comments;