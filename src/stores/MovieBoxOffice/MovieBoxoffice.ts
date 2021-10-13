import { action, makeObservable, observable } from 'mobx'
import { getBoxOfficeListService, GetBoxOfficeListServiceRequestType, GetBoxOfficeListServiceResponseType} from '../../services'

class MoviesBoxofficeService {
   
    BoxOfficeListService(url: string, params: GetBoxOfficeListServiceRequestType) {
        
        let moviesResopnseData: GetBoxOfficeListServiceResponseType['moviesData'] = [];
        
        getBoxOfficeListService(url, params).then((response) => {
            moviesResopnseData = response.moviesData;
        });
        
        return moviesResopnseData;
    }   

}


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
    
    movieitems : MoviesDetail[] = [];

    constructor(){
        
        makeObservable(this,{
            movieitems : observable,
            getData : action,
        });
    }

    getData() {

        const response = new MoviesBoxofficeService().BoxOfficeListService("", { key: "", targetDt: "" });
        this.movieitems = response.map((item) => { return new MoviesDetail(item); });
    }

        
}
