import { FC } from "react";
import Coment from "./Coment";

export type ComentProps = {
    isOpen: boolean;
}

const ComentContainer : FC<ComentProps> = (props) => {
    const isOpen = { props };

    return (
        <>
            {isOpen ? <Coment onSubmitComplete={() => { console.log() }}/> : null}
        </>
    );
}

export default ComentContainer;