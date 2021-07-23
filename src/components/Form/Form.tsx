import {FC} from 'react';

type FormProps = {
    id : string,
    option : string,
    disabled: string,
}

const Form: FC<FormProps> = (props) => {
    
    const {id, option, disabled, children} = props;
                                         
    return (
        <>
            <div className={`form-group d-flex ${option} align-items-center justify-content-between ${disabled}`}>
                <label htmlFor="default" className="mr-5">{ children }</label>
                <input id={ id } type="text" className="form-control w-75" />
            </div>
        </>
    )
}

export default Form;