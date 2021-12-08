import { FC } from "react";
import ComentLayout from "./Coment";
import { ComentListProps } from './ComentListContainer'

export type ComentProps = {
    isOpen : boolean;
    feedComent : ComentListProps['feedComentList'];
}

const Coment : FC<ComentProps> = (props) => {
    const { isOpen, feedComent } = props;

    return (
        <>
            {isOpen ? <ComentLayout feedComent={feedComent}/> : null}
        </>
    );
}

export default Coment;