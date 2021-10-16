import ReviewRating from "./ReviewRating"

export default {
    title:'components/ReviewRating'
}

export const Default = ()=>{

    return (
        <ReviewRating reviewTime={`${3} days ago`} ratingValue={2}/>
    )
}