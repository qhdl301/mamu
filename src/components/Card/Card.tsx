import {FC} from 'react'
import '../../statics/win95.css'

export type CardProps = {
    title:string;
    description:string;
}

const Card:FC<CardProps> = (props)=>{
    const {title, description} = props;

    return (
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <div className="card">
                <div className="card-header">
                    {title}
                </div>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-sm mr-2 btn-primary border-dark"
                            type="button"><span className="btn-text">OK</span></button>
                        <button className="btn btn-sm btn-primary" type="button">
                            <span className="btn-text">Cancel</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;