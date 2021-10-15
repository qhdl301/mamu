import {observable, action, makeObservable} from 'mobx';
import {getMovieDetailService} from '../../services';

export type BasicInfoType = {
    movieCd: string;
    imgUrl : string;
    title : string;
    type : string[];
}

export type DetailInfoType = {
    //dummy
    description:string
}

export default class MovieDetail {
    basicInfo : BasicInfoType
    detailInfo : DetailInfoType | null = null

    constructor(props : BasicInfoType) {
        this.basicInfo = props;

        makeObservable(this, {
            basicInfo: observable,
            detailInfo: observable,
            getDetail : action,
        });
    }

    async getDetail() {
        const res = await getMovieDetailService("", { movieCd:this.basicInfo.movieCd })
        
        this.detailInfo = res;
    }
}