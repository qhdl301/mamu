import { FC } from "react";
import { Typography } from "@material-ui/core";
import FeedReviewAddArcodion from "./AddComent";

export type ComentProps = {
    isOpen : boolean;
}

const Coment : FC<ComentProps> = (props) => {
    const { isOpen } = props;
    
    return (
        <>
            {isOpen ? <FeedReviewAddArcodion/> : null}
            <Typography>ddd</Typography>
        </>
    );
}

export default Coment;