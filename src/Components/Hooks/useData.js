import { useEffect, useState } from "react"

const useData= () =>{
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('reviews-data.json')
        .then(Response => Response.json())
        .then(data => setReviews(data))
    },[]);

    return [reviews , setReviews];
}
 export default useData;