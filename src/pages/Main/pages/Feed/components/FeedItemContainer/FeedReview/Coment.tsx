import { FC } from "react";
import ComentLayout from "./ComentLayout";

export type ComentProps = {
    isOpen : boolean;
}

// read, writ에 대한 로직 처리

const Coment : FC<ComentProps> = (props) => {
    const { isOpen } = props;
    
    return (
        <>
            {isOpen ? <ComentLayout/> : null}
        </>
    );
}

export default Coment;