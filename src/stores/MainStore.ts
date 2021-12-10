import { MovieBoxOfficeStore } from './MovieBoxOffice';
import { FeedListStore } from './Feed';

class MainStore {
  movieBoxoffice : MovieBoxOfficeStore;
  feedList : FeedListStore;

  constructor(readonly currentUserUid:string) {
    this.movieBoxoffice = new MovieBoxOfficeStore();
    this.feedList = new FeedListStore(this.currentUserUid);
  }
}

export default MainStore;