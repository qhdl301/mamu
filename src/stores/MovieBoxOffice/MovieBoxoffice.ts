import { action, makeObservable, observable } from 'mobx'
import { getBoxOfficeListService, GetBoxOfficeListServiceResponseType } from '../../services';

export class MoviesDetail {

    movieList = null;
    movieDetail = null;

    constructor(props:any) {
        this.movieList = props;

        makeObservable(this, {
            movieList: observable,
            movieDetail: observable,
            getMoviesDetail : action,
        });
    }

    getMoviesDetail() {

        /*getBoxOfficeListService("", { key: "", targetDt: "" }).then((response) => {
            this.movieDetail = response.moviesDetailData; 
         });
        */
        
    }

}


export class MovieBoxoffice {
    
    items : GetBoxOfficeListServiceResponseType['moviesData'] = [];

    constructor(){
        
        makeObservable(this,{
            items : observable,
            getData : action,
        });
    }

    getData = () => {
        getBoxOfficeListService("", { key: "", targetDt: "" }).then((response) => {
            this.items = response.moviesData.map((item) => { new MoviesDetail(item);})
        });
    }

}
