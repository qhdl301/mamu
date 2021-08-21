import React, {FC, useContext} from 'react';
import {Store} from './store'

const Ctx = React.createContext(Store);         // count 관련 하여 context 생성

export const useStore = () => useContext(Ctx);  // 함수를 호출 하는 시점에 context 정보를 가지고 오기때문

const CountProvider:FC = ({children}) => {
     
    return (
      <Ctx.Provider value={Store}>
        {children}
      </Ctx.Provider>
    );
};

export default CountProvider;