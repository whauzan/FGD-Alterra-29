import { useEffect } from "react";
import { useNavigate } from "react-router";
import jwt_decode from "jwt-decode";
const AdminRoutes = (props) => {
  const history = useNavigate();
  const token = localStorage.getItem("token");
  const isAdmin = jwt_decode(token);

  useEffect(() => {
    if (!isAdmin.Admin) {
      history("/");
    }
  }, [history, isAdmin.Admin]);
  return props.children;
};

export default AdminRoutes;
