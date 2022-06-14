import { useParams } from "react-router-dom"
import { getReview } from "../utils/api";
import { useState, useEffect } from "react"
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import dayjs from 'dayjs'
import Votes from "./Votes";

const Review = () => {

    const { review_id } = useParams();
   
    const [Review, setReview] = useState([])
    const [votesChange, setVotesChange] = useState(0)
    const [ votesColor, setVotesColor ] = useState("votes")

    useEffect(() => {
       getReview(review_id).then((review) => {
         setReview(review)
       })
    }, [review_id])

    useEffect(() => {
      if (votesChange > 0) {
        setVotesColor("votes-green")
      } else if (votesChange < 0) {
        setVotesColor("votes-red")
      } else if (votesChange === 0) {
        setVotesColor("votes")
      }
   }, [votesChange])



    return (

        <main>
        <Card  style={{ width: '24rem' }}>
  <Card.Img variant="top" src={Review.review_img_url} alt={Review.title} />
  <Card.Body>
    <Card.Title>{Review.title}</Card.Title>
    <Card.Text id={votesColor}>
      Votes : {Review.votes + votesChange}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Category: {Review.category}</ListGroupItem>
    <ListGroupItem>Created at : {dayjs(Review.created_at).format("DD/MM/YYYY HH:mm:ss")}</ListGroupItem>
    <ListGroupItem>Designer : {Review.designer}</ListGroupItem>
    <ListGroupItem>Owner : {Review.owner}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Votes review_id={Review.review_id} setVotesChange={setVotesChange} votesChange={votesChange} />
  </Card.Body>
</Card>
        </main>
    
    )

}

export default Review;