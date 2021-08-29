import { FC,lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";

const MovieList = lazy(() => import("./components/List"));
const MovieDetail = lazy(() => import("./components/Detail"));

const Main:FC = () => {

    return (
        <Switch>
            <Layout>
                <Route exact path="/" component={MovieList}/>
                <Route exact path="/detail" component={MovieDetail}/>
            </Layout>    
        </Switch>
    )

}

export default Main;