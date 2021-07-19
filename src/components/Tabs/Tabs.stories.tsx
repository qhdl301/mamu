import Tabs from './Tabs';
import { TabsProps } from './Tabs';

export default {
    title: 'components/Tabs',  // title을 사용하면 카테고리를 나눌 수 있다.
    component: Tabs,
};

export const Tabs95  = () => {

    const componentData : TabsProps['componentData'] = [
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
    
    return (

        <Tabs componentData ={componentData}/>

    );

};