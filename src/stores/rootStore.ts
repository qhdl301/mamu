import { MovieBoxOffice } from './MovieBoxOffice/';
import { FeedList } from './Feed';

export class RootStore {
  movieBoxoffice : MovieBoxOffice;
  feedList : FeedList;

  constructor() {
    this.movieBoxoffice = new MovieBoxOffice();
    this.feedList = new FeedList();
  }
}

export const rootStore = new RootStore();

export default rootStore;