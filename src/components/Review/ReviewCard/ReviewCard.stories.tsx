import { Typography } from "@material-ui/core"
import ReviewCard from "./ReviewCard"

export default {
    title:'components/ReviewCard'
}

export const Default = ()=>{

    return (
        <>
            <Typography>Good Case</Typography>
            <ReviewCard userName={'김영수'} reviewDate={'3'} reviewRating={2} review={'안녕하세요. 김영수입니다.'}/>

            <Typography>Bad Case</Typography>
            <ReviewCard userName={'마성민'} reviewDate={'3'} reviewRating={2} review={'안녕하세요. 마성민입니다.'}/>
        </>
    )
}