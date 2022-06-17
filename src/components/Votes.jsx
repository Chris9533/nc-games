import { useState} from "react"
import { CButton } from '@coreui/react';
import { patchVotes } from "../utils/api";

const Votes = ({review_id, setVotesChange, votesChange}) => {

    const [isError, setisError] = useState()
    


    const handleClick = (change) => {
        setVotesChange((currVotes) => currVotes + change)
        patchVotes(review_id, change).catch(() => {
            setVotesChange((currVotes) => currVotes - change)
            setisError(true)

        })
        
    }
    if(isError === true) {
        return <p>Oops something went wrong, your vote was not counted!</p>
} else if (votesChange === 0) {
    return (
            <>
    <CButton className="votebutton" onClick={() => handleClick(1)}>Upvote</CButton>
    <CButton className="votebutton" onClick={() => handleClick(-1)}>Downvote</CButton>
    </>
    )
} else {
return <p>Thanks for voting! <CButton className="votebutton" onClick={() => {votesChange === 1 ? handleClick(-1) : handleClick(1)}}>Undo</CButton></p>
    }
}

export default Votes;