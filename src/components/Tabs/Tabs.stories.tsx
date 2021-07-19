import Tabs from './Tabs';
import { useState } from 'react';
import { useEffect } from 'react';

export default {
    title: 'components/Tabs',  // title을 사용하면 카테고리를 나눌 수 있다.
    component: Tabs,
};

export type TabTypes = {
    tabs: {
        id: string,
        href: string,
        value: string,
        ariacontrols : string,
        
    },
    contents: {
        id: string,
        arialabelledby: string,
        value: string,
    }
}


export const Tabs95  = () => {

    const [componentData, setcomponentData] = useState<TabTypes[]>([{
        tabs: {
            id: '',
            href: '',
            ariacontrols :'',
            value: '',
        },
        contents: {
            id: '',
            arialabelledby: '',
            value: '',
        }
    }]);
    
    useEffect(() => {

        setcomponentData(
            [
                {
                    tabs: {
                        id: 'dailyMovies-tab',
                        href: '../#dailyMovies',
                        ariacontrols: 'dailyMovies',
                        value: '일간 무비',
                    },
                    contents: {
                        id: 'dailyMovies',
                        arialabelledby : 'dailyMovies-tab',
                        value : '일간 무비 내용',
                    }
                },
                {
                    tabs: {
                        id: 'dailyMovies-tab',
                        href: '../#dailyMovies',
                        ariacontrols: 'dailyMovies',
                        value: '일간 무비',
                    },
                    contents: {
                        id: 'dailyMovies',
                        arialabelledby : 'dailyMovies-tab',
                        value : '일간 무비 내용',
                    }
                }
            ]
        );      
              
    },[])
    
    
    return (

        <Tabs componentData ={componentData}/>

    );

};