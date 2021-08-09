import { FC } from 'react'
import { observer } from 'mobx-react';

import Store from '../store'
import Button from '../Button';

const Count:FC = observer((props)=>{
    
    const { countClass } = Store;
    const { children } = props;

    return (
        <div>
            <h2>{ children } : { countClass.num } / Dobule { children } : {countClass.double}</h2>
            <Button onClick={countClass.increase}>+1</Button>
            <Button onClick={countClass.decrease}>-1</Button>
        </div>
    )
})

export default Count;