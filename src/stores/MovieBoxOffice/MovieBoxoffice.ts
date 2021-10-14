import { action, makeObservable, observable } from 'mobx'
import { boxOfficeListMock } from '../../mocks';
import { httpFetcher } from '../../utils';

export type GetBoxOfficeListServiceRequestType = {
    key: string,
    targetDt: string,
    itemPerPage?: string,
    multiMovieYn?: string,
    repNationCd?: string,
    wideAreaCd?: string
}

export type BasicInfoType = {
    imgUrl : string,
    title : string,
    type : string[]
}

export type DetailInfoType = {
    
}

class MoviesBoxofficeService {
   
    BoxOfficeListService(url: string, params: GetBoxOfficeListServiceRequestType) {
        return httpFetcher(url, params, boxOfficeListMock);        
    }   

}


export class MoviesDetail {

    basicInfo : BasicInfoType = {imgUrl : '', title : '', type : []};
    detailInfo : DetailInfoType = [];

    constructor(props : any) {
        
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
    
    movieitems : MoviesDetail[] = [];

    constructor(){
        
        makeObservable(this,{
            movieitems : observable,
            getData : action,
        });
    }

    async getData() {
        const service = new MoviesBoxofficeService();
        const response = await service.BoxOfficeListService("", { key: "", targetDt: "" });
        this.movieitems = response.moviesData.map(item => new MoviesDetail(item));
    }        
}
