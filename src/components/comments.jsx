import { useEffect } from "react"
import { getComments } from "../utils/api"
import dayjs from 'dayjs'

const Comments = ({review_id, comments, setComments}) => {


    useEffect(() => {
        getComments(review_id)
        .then((comments) => {
            setComments(comments);

        })
    }, [review_id, setComments])
    return (
        <section className="comments">
        <h2>Comments</h2>

        {comments.map((comment) => {
            return (

        <div key={comment.comment_id}className="card text-center">
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
            )
            
        })}
</ section>
    )
}

export default Comments;