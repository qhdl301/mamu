import MovieBoxoffice from './MovieBoxOffice/MovieBoxoffice';

export class RootStore {
  movieBoxoffice : MovieBoxoffice;
  
  constructor() {
    this.movieBoxoffice = new MovieBoxoffice();
  }
}

export const rootStore = new RootStore();

export default rootStore;