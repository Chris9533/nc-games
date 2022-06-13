import axios from "axios";

const gamesApi = axios.create({
    baseURL: `https://mysterious-dusk-03964.herokuapp.com/api`
})

export const getReviews = () => {
    return gamesApi.get(`/reviews`)
    .then((res) => {
        return res.data.reviews;
    })
    
}