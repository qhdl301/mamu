import { createContext, FC, useContext } from "react";
import rootStore, {RootStore} from '../stores/rootStore';

const RootStoreContext = createContext({} as RootStore);

export const RootStoreProvider:FC = ({children})=>{

    return (
        <RootStoreContext.Provider value={rootStore}>
            {children}
        </RootStoreContext.Provider>
    )
}

export const useRootStore = ()=> useContext(RootStoreContext);