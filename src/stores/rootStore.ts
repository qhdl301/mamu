import { MovieBoxOffice } from './MovieBoxOffice/';
import Feed from './Feed/';

export class RootStore {
  movieBoxoffice : MovieBoxOffice;
  feedPost : Feed;

  constructor() {
    this.movieBoxoffice = new MovieBoxOffice();
    this.feedPost = new Feed();
  }
}

export const rootStore = new RootStore();

export default rootStore;