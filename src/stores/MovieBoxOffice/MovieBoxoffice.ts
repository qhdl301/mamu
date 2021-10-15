import { action, makeObservable, observable } from 'mobx'
import { getBoxOfficeListService } from '../../services';
import MovieDetail from './MovieDetail';

export default class MovieBoxoffice {
    movieItems : MovieDetail[] = [];

    constructor(){
        makeObservable(this,{
            movieItems : observable,
            getMovieItemsData : action,
        });
    }

    async getMovieItemsData() {
        const response = await getBoxOfficeListService("", { key: "", targetDt: "" });
        
        try {
            this.movieItems = response.moviesData.map(item => new MovieDetail(item));
        } catch (error) {
            return console.log(error);
        }
    }        
}
