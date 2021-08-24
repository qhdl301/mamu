
import { useFireBaseState } from '../../contexts';
import { Profile } from './components';

const Header = () => {
  const loginState = useFireBaseState();

  return (
      <Profile userImg={loginState.user.photoURL} userName={loginState.user.displayName}/>
  );
};

export default Header;
