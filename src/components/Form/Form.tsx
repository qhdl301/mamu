import {FC} from 'react';
import clsx from 'clsx';

type FormProps = {
    option : 'success' | 'danger',
}

const Form: FC<FormProps> = (props) => {
    const { option, children } = props;
                                         
    return (
        <div className={`form-group d-flex ${clsx({'has-success': option, 'has-error': option})} align-items-center justify-content-between ${clsx({'disabled': ''})})`}>
            <label htmlFor="default" className="mr-5">{ children }</label>
            <input id="primary" type="text" className="form-control w-75" />
        </div>
    )
}

export default Form;