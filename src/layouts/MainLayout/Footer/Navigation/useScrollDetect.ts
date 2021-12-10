import { useCallback, useEffect, useState } from "react";

const noop = ()=>{
    return;
}
export type ScrollEventType = ()=>void;

const useScrollDetect = (
        onScrollUp:ScrollEventType = noop,
        onScrollDown:ScrollEventType= noop,
     )=>{
    const [beforeScroll, setBeforeScroll] = useState<number>(window.pageYOffset)
    const [isUpBefore, setIsUpBefore] = useState(true);

    const scrollEventListener = useCallback(()=>{
        const st = window.pageYOffset || document.documentElement.scrollTop

        setIsUpBefore(st <= beforeScroll)
        setBeforeScroll(st <= 0 ? 0 : st)
    },[beforeScroll])

    useEffect(()=>{
        window.addEventListener('scroll', scrollEventListener)

        return ()=>{
            window.removeEventListener('scroll', scrollEventListener);
        }
    }, [scrollEventListener])

    useEffect(()=>{
        if(isUpBefore){
            onScrollUp();
            return;
        }
        onScrollDown();
    },[isUpBefore, onScrollUp, onScrollDown])

    return {
        isUpBefore
    }
}

export default useScrollDetect;