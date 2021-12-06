import { MovieBoxOffice } from './MovieBoxOffice';
import { FeedList } from './Feed';

class MainStore {
  movieBoxoffice : MovieBoxOffice;
  feedList : FeedList;

  constructor(readonly currentUserUid:string) {
    this.movieBoxoffice = new MovieBoxOffice();
    this.feedList = new FeedList(this.currentUserUid);
  }
}

export default MainStore;