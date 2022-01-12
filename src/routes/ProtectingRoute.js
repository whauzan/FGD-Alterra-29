import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
// import { useRecoilValue } from "recoil";
// import { CheckAuth } from "../helpers/user";

const ProtectingRoute = (props) => {
  const history = useNavigate();

  const userData = useSelector((state) => state.user.users);
  useEffect(() => {
    if (!userData.name) {
      history("/");
    }
  }, [history, userData]);
  return props.children;
};

export default ProtectingRoute;
