import { useState, useEffect } from "react"
import { getCategories } from "../utils/api";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom"


const ItemQueries = ({setSearchParams, setSortBy, categoryTitle, sortByTitle}) => {

    
    const [categoryList, setCategoryList] = useState([])
    

    useEffect(() => {
        getCategories().then((categories) => {
            setCategoryList(categories)
        })
     }, [])
   

     return (
<>
     <DropdownButton id="dropdown-basic-button"title={categoryTitle} variant="light">
{categoryList.map((category) => {
    return (
        <Dropdown.Item key={category.slug} as="button" onClick={() => {setSearchParams({ category: category.slug });}}>{category.slug}</Dropdown.Item>
        )
    })}
   
</DropdownButton>
<DropdownButton id="dropdown-basic-button"title={sortByTitle} variant="light">
<Dropdown.Item  as="button" onClick={() => {setSortBy(["votes", "ASC"])}}>Votes : Ascending</Dropdown.Item>
<Dropdown.Item  as="button" onClick={() => {setSortBy(["votes", "DESC"])}}>Votes : Descending</Dropdown.Item>
<Dropdown.Item  as="button" onClick={() => {setSortBy(["created_at", "ASC"])}}>Created at : Ascending</Dropdown.Item>
<Dropdown.Item  as="button" onClick={() => {setSortBy(["created_at", "DESC"])}}>Created at : Descending</Dropdown.Item>
<Dropdown.Item  as="button" onClick={() => {setSortBy(["comment_count", "ASC"])}}>Comment Count : Ascending</Dropdown.Item>
<Dropdown.Item  as="button" onClick={() => {setSortBy(["comment_count", "DESC"])}}>Comment Count : Descending</Dropdown.Item>
</DropdownButton>
</>
     )



}

export default ItemQueries;