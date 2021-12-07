import { action, makeObservable, observable } from 'mobx';
import { FeedComentInfo, getFeedComentService } from 'services/Feed';

export default class FeedComent {

    constructor(readonly feedComent : FeedComentInfo) {

         makeObservable(this, {
             feedComent: observable,
             getFeedComentList: action
         }); 
    }

    async getFeedComentList() {
        try{
            const response = await getFeedComentService('');
            this.feedComent = response.map(item => new FeedComent(item));
        } catch (error) {
            return console.log(error);
        }
    }

    

}