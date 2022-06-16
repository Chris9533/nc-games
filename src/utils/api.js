import axios from "axios";

const gamesApi = axios.create({
    baseURL: `https://mysterious-dusk-03964.herokuapp.com/api`
})

export const getReviews = (category, sort_by) => {
    console.log()
  
    return gamesApi.get(`/reviews?`, { params : { category : category, sort_by : sort_by[0], order : sort_by[1] }})
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

export const getUsers = () => {
    return gamesApi.get("/users")
    .then((res) => {
        return res.data.users
    })
}

export const addComment = (review_id, username, body) => {
    return gamesApi.post(`/reviews/${review_id}/comments`, { username: username, body: body } )
    .then((res) => {
        return res.data.comment

    })
}