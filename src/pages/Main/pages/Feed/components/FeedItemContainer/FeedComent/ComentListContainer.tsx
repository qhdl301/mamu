import { FC } from "react";
import { FeedComentInfo } from "services/Feed";
import ComentListLayout from "./ComentList";

export type ComentListProps = {
    feedComentList : FeedComentInfo[];
}

const ComentList: FC<ComentListProps> = (props) => {
    const { feedComentList } = props;
    
    return (
        <>
            {
                feedComentList.map((item,index) => 
                    <ComentListLayout
                        key={index}
                        userName={item.userName}
                        coment={item.coment}
                        timeStamp={item.timeStamp}
                    />
                )
            }
        </>
    )
}

export default ComentList;