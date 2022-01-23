import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
// import { useRecoilValue } from "recoil";
// import { CheckAuth } from "../helpers/user";
import jwt_decode from "jwt-decode";
const ProtectingRoute = (props) => {
  const history = useNavigate();
  const token = localStorage.getItem("token");
  const isAdmin = jwt_decode(token);
  const userData = useSelector((state) => state.user.users);

  useEffect(() => {
    if (!userData.name) {
      history("/");
    } else if (isAdmin.Admin !== true) {
      history("/");
    }
  }, [history, isAdmin.Admin, userData]);
  return props.children;
};

export default ProtectingRoute;
