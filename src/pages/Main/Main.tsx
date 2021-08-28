import { FC } from "react"
import { Switch, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import MovieList from "./components/List"

const Main:FC = () => {

    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={()=>
                    <div>
                        <Link to={"/detail"}>go Details</Link>
                    </div>
                }/>
                <Route exact path="/detail" component={MovieList}/>
            </Switch>
        </Layout>    
    )

}

export default Main;