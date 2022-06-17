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
    const [sortBy, setSortBy] = useState([null, null])
    const [categoryTitle, setCategoryTitle] = useState("Category")
    const [sortByTitle, setSortByTitle] = useState("Sort by")
    const searchTerm = searchParams.get("category")

    useEffect(() => {
      setIsLoading(true)
        getReviews(searchTerm, sortBy).then((reviews) => {
            setReviews(reviews)
            if(searchTerm === null) {
              setCategoryTitle("category")
            } else {
              setCategoryTitle(`Category:  ${searchTerm}`)
            }
            if(sortBy[0] === null) {
              setSortByTitle("Sort by") 
            } else {
              setSortByTitle(`Sort by:  ${sortBy[0]} ${sortBy[1]}`)
            }
            setIsLoading(false)
         })

    }, [searchTerm, sortBy])
   


  
    if(loading) return (
      <main>
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <p>Loading</p>
    </ main>
    )
    return (
      
        <ul className="reviewcard" >
          <h2>Reviews</h2>
          <ItemQueries setSearchParams={setSearchParams} setSortBy={setSortBy} categoryTitle={categoryTitle} sortByTitle={sortByTitle} />
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
        <Link  to={`/reviews/${review.review_id}`}><CButton>View</CButton></Link>
      </CCardBody>
    </CCard>
          )})
    }
    </main>
    </ul>
    )
}

export default Reviews;