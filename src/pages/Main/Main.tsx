import { FC, lazy, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useFireBaseState } from "../../contexts";
import { MainLayout } from "../../layouts";
import createReviewService from "../../services/createReviewService";

const DashBoard = lazy(() => import("./pages/DashBoard"));
const MovieDetail = lazy(() => import("./pages/Detail"));
const WishList = lazy(() => import("./pages/WishList"));
const Mission = lazy(() => import("./pages/Mission"));

const Main:FC = () => {
    const firebaseState = useFireBaseState();

    useEffect(()=>{
        if(confirm('(임시)리뷰 써볼래?')){    
          createReviewService({
              movieCd:'0',
              review:'블랙위도우',
              reviewRating:4,
              uid:firebaseState.user.uid,
              timeStamp:new Date().getTime(),
          });
        }
    },[]);
    
    return (
        <MainLayout>
            <Switch>
                <Route exact path="/" component={DashBoard}/>
                <Route exact path="/detail/:movieCd" component={MovieDetail}/>
                <Route exact path="/mission" component={Mission}/>
                <Route exact path="/wishlist" component={WishList}/>
            </Switch>
        </MainLayout>    
    )

}

export default Main;