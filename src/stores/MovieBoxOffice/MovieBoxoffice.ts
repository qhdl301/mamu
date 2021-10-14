import { action, makeObservable, observable } from 'mobx'
import { getBoxOfficeListService, GetBoxOfficeListServiceRequestType } from '../../services';

export type BasicInfoType = {
    imgUrl : string,
    title : string,
    type : string[]
}

export type DetailInfoType = {
    
}

class MoviesBoxofficeService {
   
    GetBoxOfficeList(url: string, params : GetBoxOfficeListServiceRequestType) {
        return getBoxOfficeListService(url, params);        
    }   

}


export class MoviesDetail {

    basicInfo : BasicInfoType = {imgUrl : '', title : '', type : []};
    detailInfo : DetailInfoType = [];

    constructor(props : BasicInfoType) {
        
        this.basicInfo = props;

        makeObservable(this, {
            basicInfo: observable,
            detailInfo: observable,
            getMoviesDetail : action,
        });
    }

    getMoviesDetail() {

        /*getBoxOfficeListService("", { key: "", targetDt: "" }).then((response) => {
            this.detailInfo = response.moviesDetailData; 
         });
        */
        
    }

}


export class MovieBoxoffice {
    
    movieItems : MoviesDetail[] = [];

    constructor(){
        makeObservable(this,{
            movieItems : observable,
            getMovieItemsData : action,
        });
    }

    async getMovieItemsData() {
        const boxOfficeService = new MoviesBoxofficeService();
        const response = await boxOfficeService.GetBoxOfficeList("", { key: "", targetDt: "" });
        this.movieItems = response.moviesData.map(item => new MoviesDetail(item));
    }        
}
