import { useParams } from "react-router-dom"
import { UserContext } from "../contexts/user";
import { useContext } from "react";
import { useState } from "react"
import { addComment } from "../utils/api";
import dayjs from 'dayjs'
import { Link } from "react-router-dom"
const PostComment = () => {

    const { review_id } = useParams();
    const user = useContext(UserContext);

    const [input, setInput] = useState("");
    const [ comment, setComment ] = useState()
    const [ isError, setIsError ] = useState(false)
    const [placeholder, setPlaceholder] = useState("")

    const handleSubmit = (event) => {
        if (input.length === 0) {
            event.preventDefault();
            setPlaceholder("Can't add an empty comment")

        } else {

            event.preventDefault();
            addComment(review_id, user.username, input)
            .then((comment) => {
                setComment(comment)
    
            }).catch(() => {
                setIsError(true)
    
            })
        }

        
      };
      if(user === null) {
        return <p>You need to <Link  to={`/reviews/${review_id}`}>Login</Link> to leave a comment</p>
      } else if (isError){
        return <p>Oops something went wrong, your comment has not been submitted! Click <Link  to={`/reviews/${review_id}`}>here</Link> to return to the review</p>

      }
     else if(comment === undefined) {

return (
<form  onSubmit={handleSubmit}>
<label>Leave Comment</label>
<input
  value={input}
  onChange={(event) => setInput(event.target.value)}
  placeholder={placeholder}
/>
<button>Submit</button>
</form> )
      } else {
        return (
<main>
    <p>Successfully added comment, click <Link  to={`/reviews/${review_id}`}>here</Link> to go back to the review</p>
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
    </main>
                )
      }

}

export default PostComment;