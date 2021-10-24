import {observable, action, makeObservable} from 'mobx';
import {getMovieDetailService, getReviewService, createReviewService} from '../../services';

export type BasicInfoType = {
    movieCd: string;
    imgUrl : string;
    title : string;
    type : string[];
}

export type ReviewInfoType = {
    userName : string;
    movieCd: string;
    uid : string;
    reviewRating : number;
    timeStamp : number;
    review: string;
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
            insertReviewInfo : action
        });
    }

    async getDetail() {
        this.detailInfo = await getMovieDetailService("", { movieCd:this.basicInfo.movieCd });
    }

    async getReviewInfos() {
        this.reviewInfos = await getReviewService("", { movieCd:this.basicInfo.movieCd });
    }

    insertReviewInfo(reviewInfoWithoutMoiveCd : Omit<ReviewInfoType, 'movieCd'>) {
        createReviewService({
            movieCd: this.basicInfo.movieCd,
            ...reviewInfoWithoutMoiveCd
        }).then(()=>{
            this.getReviewInfos();
        });
    }
}