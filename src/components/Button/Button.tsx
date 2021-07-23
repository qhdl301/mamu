import {FC} from 'react';
import * as CONFIGDATA from "./config";

const Button:FC = (props)=>{
    // rest는 props로 넘어오는 데이터를 객체/배열로 구성시켜주고, destructuring을 통해 rest 객체 중 children 프로퍼티를 별도로 빼서 사용 가능하다. 
    const { SIZE, COLOR, BORDER } = CONFIGDATA.BUTTON;
    const { children } = props; // children : 부모 노드의 컴포넌트 값

    return (
        <button className= {`btn mr-2 mb-2 ${SIZE} btn-${COLOR} ${BORDER}`}>{children}</button>
    )
}

export default Button;