import { useParams } from "react-router-dom"
import { getReview } from "../utils/api";
import { useState, useEffect } from "react"
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import dayjs from 'dayjs'

const Review = () => {

    const { review_id } = useParams();
   
    const [Review, setReview] = useState([])

    useEffect(() => {
       getReview(review_id).then((review) => {
         setReview(review)
       })
    }, [review_id])



    return (

        <main>
        <Card  style={{ width: '24rem' }}>
  <Card.Img variant="top" src={Review.review_img_url} alt={Review.title} />
  <Card.Body>
    <Card.Title>{Review.title}</Card.Title>
    <Card.Text id="votes">
      Votes : {Review.votes}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Category: {Review.category}</ListGroupItem>
    <ListGroupItem>Created at : {dayjs(Review.created_at).format("DD/MM/YYYY HH:mm:ss")}</ListGroupItem>
    <ListGroupItem>Designer : {Review.designer}</ListGroupItem>
    <ListGroupItem>Owner : {Review.owner}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link >Upvote</Card.Link>
    <Card.Link >Downvote</Card.Link>
  </Card.Body>
</Card>
        </main>
    
    )

}

export default Review;