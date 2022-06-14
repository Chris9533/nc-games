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