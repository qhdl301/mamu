import { observer } from "mobx-react-lite";
import { FC, useCallback, useEffect, useState } from "react";
import { FeedStore } from "stores/Feed";
import Coment,{ ComentProps } from "./Coment";

export type ComentContainerProps = {
    isOpen : boolean;
    feedItems : FeedStore;
}

const ComentContainer : FC<ComentContainerProps> = (props) => {
    const { 
        isOpen, 
        feedItems 
    } = props;
    const [coment, setComent] = useState('');
    const handleComentChange : ComentProps['onComentChange'] = useCallback((e)=>{
        setComent(e.target.value);
    },[])
    const handleSuccessButton = useCallback(()=>{
        const date = new Date();

        feedItems.insertFeedComent({
            feedId : feedItems.feedInfo.feedId,
            userName: feedItems.feedInfo.userName,
            timeStamp : `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
            coment: coment
        });
    },[coment]);

    useEffect(()=>{
        if(isOpen){
            feedItems.getFeedComentList();
        }
    },[isOpen, feedItems])

    if(isOpen){
        return (
                <Coment 
                    comentItems={feedItems.feedComent}
                    onSuccessClick={handleSuccessButton}
                    onComentChange={handleComentChange}
                /> 
        )
    }

    return null;
}

export default observer(ComentContainer);