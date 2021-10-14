import { MovieBoxoffice, MoviesDetail }from './MovieBoxoffice';

class RootStore {
    
    MovieBoxoffice : MovieBoxoffice;
    MoviesDetail: MoviesDetail;
  
    constructor() {
      this.MovieBoxoffice = new MovieBoxoffice();
      this.MoviesDetail = new MoviesDetail({imgUrl : '', title : '', type : []});
    }
}

const Store = new RootStore();
export default Store;