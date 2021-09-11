import { FC,lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "./page";

const DashBoard = lazy(() => import("./page/DashBoard"));
const MovieDetail = lazy(() => import("./page/Detail"));
const WishList = lazy(() => import("./page/WishList"));
const Mission = lazy(() => import("./page/Mission"));

const Main:FC = () => {

    return (
        <Switch>
            <Layout>
                <Route exact path="/" component={DashBoard}/>
                <Route exact path="/detail" component={MovieDetail}/>
                <Route exact path="/mission" component={Mission}/>
                <Route exact path="/wishlist" component={WishList}/>
            </Layout>    
        </Switch>
    )

}

export default Main;