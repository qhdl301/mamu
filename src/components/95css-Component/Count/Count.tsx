import { FC,useContext } from 'react'
import { observer } from 'mobx-react-lite';

import Button from '../Button';
import { StoreContext } from '../store/useStore';

// 전역 객체를 사용하요 provider를 사용
const Count:FC = observer((props)=>{
    
    const { children } = props;
    const contextItem  = useContext(StoreContext);
    return (
        <div>
            <h2>{ children } : { contextItem } / Dobule { children } : {contextItem}</h2>
            {/*<Button onClick={contextItem}>+1</Button>
            <Button onClick={countClass.decrease}>-1</Button>
            */}
        </div>
    )
})

export default Count;