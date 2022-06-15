import axios from "axios";

const gamesApi = axios.create({
    baseURL: `https://mysterious-dusk-03964.herokuapp.com/api`
})

export const getReviews = (category) => {
    return gamesApi.get(`/reviews`, { params : { category }})
    .then((res) => {
        return res.data.reviews;
    })
    
}

export const getCategories = () => {
    return gamesApi.get(`/categories`)
    .then((res) => {
        return res.data.categories;
    })
    
}

export const getReview = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}`)
    .then((res) => {
        return res.data.review;
    })
}

export const patchVotes = (review_id, change) => {
    return gamesApi.patch(`/reviews/${review_id}`, { inc_votes: change } )
    .then((res) => {
        return res.data.user

    })
}

export const getComments = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}/comments`)
    .then((res) => {
        return res.data.comments;
    })
}