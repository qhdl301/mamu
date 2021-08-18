import React, {FC} from 'react';
import {countStore} from './count'

export const StoreContext = React.createContext({});

const CountProvider:FC<React.PropsWithChildren<{}>> = ({children}) => {
     
    return (
      <StoreContext.Provider value={countStore}>
        {children}
      </StoreContext.Provider>
    );
};

export default CountProvider;