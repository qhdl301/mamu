import CountProvider from '../store/useStore';
import Count from './Count';


export default {
  title: 'components/Count',  // title을 사용하면 카테고리를 나눌 수 있다.
  component: Count,
};

export const Count95 = () => {
  
  return (
        <CountProvider>
          <Count>Count</Count>
        </CountProvider>
  )
}