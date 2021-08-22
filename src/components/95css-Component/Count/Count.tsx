import { FC } from 'react'
import { observer } from 'mobx-react-lite';

import Button from '../Button';
import { useStore } from '../store/useStore';

const Count:FC = observer((props)=>{
    const Store = useStore();  

    const { children } = props;
    return (
        <div>
                <h2>{ children } : { Store.num } / Dobule { children } : {Store.double}</h2>
                <Button onClick={Store.increase}>+1</Button>
                <Button onClick={Store.decrease}>-1</Button>
        </div>
    )
})

export default Count;