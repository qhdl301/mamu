import { action, makeObservable, observable } from 'mobx'

class Count {
    
    num = 0;

    constructor(){
        makeObservable(this,{
            num: observable,
            increase: action,
            decrease: action,
        });
    }

    increase = () => {
        this.num++
        //alert(this.num);
    }
    decrease = () => {
        this.num--
        //alert(this.num);
    }

}

const countStore = new Count()
export default countStore