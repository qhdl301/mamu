import { FC } from "react";
import { FeedComentInfo } from "services/Feed";
import { dateDiff } from "utils";
import ComentListLayout from "./ComentList";

export type ComentListContainerProps = {
    comentListItem : FeedComentInfo[];
}

const ComentListContainer: FC<ComentListContainerProps> = (props) => {
    const { 
        comentListItem 
    } = props;
    
    return (
        <>
            {
                comentListItem.map((item,index) => 
                    <ComentListLayout
                        key={index}
                        userName={item.userName}
                        coment={item.coment}
                        timeStamp={dateDiff(item.timeStamp)}
                    />
                )
            }
        </>
    )
}

export default ComentListContainer;