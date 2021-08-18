import { action, computed, makeObservable, observable } from 'mobx'

class Count {
    
    num = 0;

    constructor(){
        makeObservable(this,{
            num: observable,
            increase: action,
            decrease: action,
            double: computed
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

    //computed : 자동으로 리턴하는 변수
    get double() {
        return this.num * 2
    }

}


export const countStore = new Count()