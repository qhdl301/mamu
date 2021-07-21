import Button from './Button';

export default {
  title: 'components/Button',  // title을 사용하면 카테고리를 나눌 수 있다.
  component: Button,
};

export const Button95 = ()=>{

    return (
        // border-dark, border-dark-lg
        <>
          <Button color='primary' size='' border=''>Primary</Button>
          <Button color='secondary' size='' border=''>Secondary</Button>
        </>
    )
}

