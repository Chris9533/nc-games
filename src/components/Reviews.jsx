import { useState, useEffect } from "react"
import { getReviews } from "../utils/api"
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { Link } from "react-router-dom"

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getReviews().then((reviews) => {
            setReviews(reviews)
         })

    }, [])


    return (
        <ul className="reviewcard" >
          <main>
          {reviews.map((review) => {
            return (
              <CCard key={review.title} className="itemcard" style={{ width: '18rem' }}>
      <CCardImage className="card-image" orientation="top" src={review.review_img_url} />
      <CCardBody>
        <CCardTitle>{review.title}</CCardTitle>
        <CCardText>
          Category: {review.category}
        </CCardText>
        <Link to="/hi">
        <CButton>View Item</CButton>
        </Link>
      </CCardBody>
    </CCard>
          )})
    }
    </main>
    </ul>
    )
}

export default Reviews;