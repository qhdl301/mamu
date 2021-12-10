import { observer } from "mobx-react-lite";
import { FC, useCallback, useEffect, useState } from "react";
import { FeedStore } from "stores/Feed";
import Coment,{ ComentProps } from "./Coment";

export type ComentContainerProps = {
    isOpen : boolean;
    feedItem : FeedStore;
}

const ComentContainer : FC<ComentContainerProps> = (props) => {
    const { 
        isOpen, 
        feedItem 
    } = props;
    const [coment, setComent] = useState('');
    const handleComentChange : ComentProps['onComentChange'] = useCallback((e)=>{
        setComent(e.target.value);
    },[])
    const handleSuccessButton = useCallback(()=>{
        const date = new Date();

        feedItem.insertFeedComent({
            feedId : feedItem.feedInfo.feedId,
            userName: feedItem.feedInfo.userName,
            timeStamp : `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
            coment: coment
        });
    },[coment]);

    useEffect(()=>{
        if(isOpen){
            feedItem.getFeedComentList();
        }
    },[isOpen, feedItem])

    if(isOpen){
        return (
                <Coment 
                    feedComent={feedItem.feedComent}
                    onSuccessClick={handleSuccessButton}
                    onComentChange={handleComentChange}
                /> 
        )
    }

    return null;
}

export default observer(ComentContainer);