import { useEffect } from "react";
import { useNavigate } from "react-router";
import jwt_decode from "jwt-decode";
// import { useRecoilValue } from "recoil";
// import { CheckAuth } from "../helpers/user";
const ProtectingRoute = (props) => {
  const history = useNavigate();
  const token = localStorage.getItem("token");
  const users = jwt_decode(token);
  useEffect(() => {
    if (!users.UserID && users.exp * 1000 < Date.now()) {
      history("/");
    }
  }, [history, users.UserID, users.exp]);
  return props.children;
};

export default ProtectingRoute;
