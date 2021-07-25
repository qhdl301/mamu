import {MouseEventHandler, FC} from 'react';
import clsx from 'clsx';

type ButtonProps = {
    label : string
    option? : 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'danger',
    location?: {
        xloc?: string,
        yloc?: string,
    }
    size? : 'btn-sm' | 'btn-lg',
    border?: 'border-dark' | 'border-dark-lg',
    onClick? : MouseEventHandler<HTMLButtonElement>
}

const Button:FC<ButtonProps> = (props)=>{
    const {
        label,
        location = {
            xloc : 'md-2'
        },
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
                    location?.xloc,
                    location?.yloc,
                    { size },
                    `btn-${option}`,
                    { border },
                )
            }
            type="button"
            onClick={onClick}
        >
            <span className="btn-text">{label}</span>
        </button>
    )
}

export default Button;