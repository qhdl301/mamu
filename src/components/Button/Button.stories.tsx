import Button from './Button';
import * as CONFIGDATA from "./config";

export default {
  title: 'components/Button',  // title을 사용하면 카테고리를 나눌 수 있다.
  component: Button,
};

export const Button95 = () => {
    const { COLOR, SIZE, BORDER } = CONFIGDATA.BUTTON;

    return (
      <Button color={COLOR} size={SIZE} border={BORDER}>BUTTON</Button>
    )
}

