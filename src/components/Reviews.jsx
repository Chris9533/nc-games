import { useState, useEffect } from "react"
import { getReviews } from "../utils/api"
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { Link } from "react-router-dom"
import ItemQueries from "./itemqueries";
import { useSearchParams } from "react-router-dom";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setIsLoading] = useState(false)
    const searchTerm = searchParams.get("category")

    useEffect(() => {
      setIsLoading(true)
        getReviews(searchTerm).then((reviews) => {
            setReviews(reviews)
            setIsLoading(false)
         })

    }, [searchTerm])


  
    if(loading) return (
      <main>
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <p>Loading</p>
    </ main>
    )
    return (
      
        <ul className="reviewcard" >
          <h2>Reviews</h2>
          <ItemQueries setSearchParams={setSearchParams} />
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