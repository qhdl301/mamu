import { Typography } from "@material-ui/core"
import ReviewCard from "./ReviewCard"

export default {
    title:'components/ReviewCard'
}

export const Default = ()=>{

    return (
        <>
            <Typography>Good Case</Typography>
            <ReviewCard isGood={true} userName={'김영수'} reviewsCount={`${133} reviews`} ratingValue={2} reviewContent={'안녕하세요. 김영수입니다.'}/>

            <Typography>Bad Case</Typography>
            <ReviewCard isGood={false} userName={'마성민'} reviewsCount={`${133} reviews`} ratingValue={3} reviewContent={'안녕하세요. 마성민입니다.'}/>
        </>
    )
}