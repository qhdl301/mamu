import { Typography } from '@material-ui/core';
import {Children, FC} from 'react'

export type ReviewContentProps = {
}

const ReviewContent:FC<ReviewContentProps> = (props)=>{
    const {children} = props;

    return (
        <Typography variant="body2">
            {children}
        </Typography>
    )
}

export default ReviewContent;