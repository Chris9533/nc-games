import { useState, useEffect } from "react"
import { getCategories } from "../utils/api";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom"


const ItemQueries = ({setSearchParams}) => {

    
    const [categoryList, setCategoryList] = useState([])
    const [categoryTitle, setCategoryTitle] = useState("Category")

    useEffect(() => {
        getCategories().then((categories) => {
            setCategoryList(categories)
        })
     }, [])

    const setCategory = (title) => {
        setCategoryTitle(title)

    }
   

     return (

     <DropdownButton id="dropdown-basic-button" title={categoryTitle} variant="light">
{categoryList.map((category) => {
    return (
        <Link key={category.slug} className="navbutton" to={`/reviews?category=${category.slug}`}>
        <Dropdown.Item  as="button" onClick={() => {setSearchParams({ category: category.slug }); setCategory(category.slug)}}>{category.slug}</Dropdown.Item>
        </Link>
        )
    })}
   
</DropdownButton>
     )



}

export default ItemQueries;