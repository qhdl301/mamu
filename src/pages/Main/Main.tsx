import { FC,lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { MainLayout } from "../../layouts";

const DashBoard = lazy(() => import("./pages/DashBoard"));
const MovieDetail = lazy(() => import("./pages/Detail"));
const WishList = lazy(() => import("./pages/WishList"));
const Mission = lazy(() => import("./pages/Mission"));

const Main:FC = () => {

    return (
        <Switch>
            <MainLayout>
                <Route exact path="/" component={DashBoard}/>
                <Route exact path="/detail" component={MovieDetail}/>
                <Route exact path="/mission" component={Mission}/>
                <Route exact path="/wishlist" component={WishList}/>
            </MainLayout>    
        </Switch>
    )

}

export default Main;