import { FC, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { MainLayout } from "layouts";
import { MainStoreProvider } from "contexts";

const DashBoard = lazy(() => import("./pages/DashBoard"));
const MovieDetail = lazy(() => import("./pages/Detail"));
const Feed = lazy(() => import("./pages/Feed"));
const Mission = lazy(() => import("./pages/Mission"));

const Main:FC = () => {

    return (
        <MainStoreProvider>
            <MainLayout>
                <Switch>
                    <Route exact path="/" component={DashBoard}/>
                    <Route exact path="/detail/:movieCd" component={MovieDetail}/>
                    <Route exact path="/mission" component={Mission}/>
                    <Route exact path="/feed" component={Feed}/>
                </Switch>
            </MainLayout>    
        </MainStoreProvider>
    )
}

export default Main;