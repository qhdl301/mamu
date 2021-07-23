import Form from './Form';
import * as CONFIGDATA from './config';

export default {
  title: 'components/Form',  // title을 사용하면 카테고리를 나눌 수 있다.
  component: Form,
};

export const Form95 = ()=>{

  const { ID, SUCCESS, FAIL, DISABLED } = CONFIGDATA.FORM;
    return (
        <>
        <Form option={SUCCESS ? "has-success" : (FAIL ? "has-danger" : "")} id={ID} disabled={DISABLED ? 'disabled' : ''}>{`${ID}::`}</Form>
        </>
    )
}

