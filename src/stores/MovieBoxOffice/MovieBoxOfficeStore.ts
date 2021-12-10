import { action, makeObservable, observable } from 'mobx'
import { getBoxOfficeListService } from 'services/MovieInfo';
import MovieDetailStore from './MovieDetailStore';

export default class MovieBoxoffice {
    movieItems : MovieDetailStore[] = [];

    constructor(){
        makeObservable(this,{
            movieItems : observable,
            getMovieItemsData : action,
        });
    }

    async getMovieItemsData() {
        const response = await getBoxOfficeListService("", { key: "", targetDt: "" });

        try {
            this.movieItems = response.moviesData.map(item => new MovieDetailStore(item));
        } catch (error) {
            return console.log(error);
        }
    }        
}