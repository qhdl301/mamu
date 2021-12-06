import { createContext, FC, useContext } from "react";
import MainStore from 'stores/MainStore';
import { useFireBaseState } from 'contexts';

const MainStoreContext = createContext({} as MainStore);

export const MainStoreProvider:FC = ({children})=>{
    const firebaseState = useFireBaseState();
    const userUid = firebaseState.user.uid;
    const mainStore = new MainStore(userUid);

    return (
        <MainStoreContext.Provider value={mainStore}>
            {children}
        </MainStoreContext.Provider>
    )
}

export const useMainStore = () => useContext(MainStoreContext);