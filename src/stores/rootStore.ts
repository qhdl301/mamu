import { MovieBoxOffice } from './MovieBoxOffice/';

export class RootStore {
  movieBoxoffice : MovieBoxOffice;
  constructor() {
    this.movieBoxoffice = new MovieBoxOffice();
  }
}

export const rootStore = new RootStore();

export default rootStore;