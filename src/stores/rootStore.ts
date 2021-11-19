import { MovieBoxOffice } from './MovieBoxOffice/';
import Feed from './Feed';

export class RootStore {
  movieBoxoffice : MovieBoxOffice;
  feed : Feed;

  constructor() {
    this.movieBoxoffice = new MovieBoxOffice();
    this.feed = new Feed();
  }
}

export const rootStore = new RootStore();

export default rootStore;