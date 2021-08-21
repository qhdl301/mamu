import Tabs from './Tabs';
import { TabsProps } from './Tabs';

export default {
    title: '95css-components/Tabs',  // title을 사용하면 카테고리를 나눌 수 있다.
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
                active: 'active',
                isariaselected : true,
            },
            contents: {
                id: 'dailyMovies',
                arialabelledby : 'dailyMovies-tab',
                value: '일간 무비 내용',
                active : 'active'
            }
        },
        {
            tabs: {
                id: 'weekleyMovies-tab',
                href: '../#weekleyMovies',
                ariacontrols: 'weekleyMovies',
                value: '주간 무비',
                active: '',
                isariaselected : false,
            },
            contents: {
                id: 'weekleyMovies',
                arialabelledby : 'weekleyMovies-tab',
                value: '주간 무비 내용',
                active : ''
            }
        }
    ]
    
    return (

        <Tabs componentData ={componentData}/>

    );

};