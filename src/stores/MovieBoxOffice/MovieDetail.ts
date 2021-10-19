import {observable, action, makeObservable} from 'mobx';
import {getMovieDetailService, getReviewService} from '../../services';

export type BasicInfoType = {
    movieCd: string;
    imgUrl : string;
    title : string;
    type : string[];
}

export type ReviewInfoType = {
    isGood : boolean;
    userName : string;
    reviewsCount : string;
    ratingValue : string;
    reviewDate : string;
    reviewContent: string;
}

export type DetailInfoType = {
    //dummy
    description:string
}

export default class MovieDetail {
    basicInfo : BasicInfoType
    detailInfo : DetailInfoType | null = null
    reviewInfos : ReviewInfoType[] = []

    constructor(props : BasicInfoType) {
        this.basicInfo = props;

        makeObservable(this, {
            basicInfo: observable,
            detailInfo: observable,
            reviewInfos: observable,
            getDetail : action,
            getReviewInfos : action,
        });
    }

    async getDetail() {
        
        this.detailInfo = await getMovieDetailService("", { movieCd:this.basicInfo.movieCd });

    }

    async getReviewInfos() {
        
        this.reviewInfos = await getReviewService("", { movieCd:this.basicInfo.movieCd });

    }


}