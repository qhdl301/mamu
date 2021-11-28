import { MovieBoxOffice } from './MovieBoxOffice/';
import { FeedList } from './Feed';

export class RootStore {
  movieBoxoffice : MovieBoxOffice;
  feed : FeedList;

  constructor() {
    this.movieBoxoffice = new MovieBoxOffice();
    this.feed = new FeedList();
  }
}

export const rootStore = new RootStore();

export default rootStore;