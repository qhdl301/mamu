import {MouseEventHandler, FC} from 'react';
import clsx from 'clsx';

type ButtonProps = {
    option? : 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'danger',
    className? : string,
    size? : 'btn-sm' | 'btn-lg',
    border?: 'border-dark' | 'border-dark-lg',
    onClick? : MouseEventHandler<HTMLButtonElement>
}

const Button:FC<ButtonProps> = (props)=>{
    const {
        children,
        className,
        option = 'primary',
        size,
        border,
        onClick,
    } = props;
                                         
    return (
        <button
            className={
                clsx(
                    "btn",
                    { size },
                    `btn-${option}`,
                    { border },
                    {className}
                )
            }
            type="button"
            onClick={onClick}
        >
            <span className="btn-text">{children}</span>
        </button>
    )
}

export default Button;