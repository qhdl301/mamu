
import { useFireBaseState } from '../../contexts';
import { Profile } from './components';

const Main = () => {
  const loginState = useFireBaseState();

  return (
    <div>
      <Profile userImg={loginState.user.photoURL} userName={loginState.user.displayName}/>
    </div>
  );
};

export default Main;
