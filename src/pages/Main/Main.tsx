import { Avatar } from "@material-ui/core";
import { useFireBaseState } from "../../contexts";

const Main = () => {
  const loginState = useFireBaseState();

  return (
    <div>
      <Avatar
        alt={loginState.user.displayName}
        src={loginState.user.photoURL}
      />
      <div>iam :{loginState.user.displayName}</div>
      <div>email :{loginState.user.email}</div>
    </div>
  );
};

export default Main;
