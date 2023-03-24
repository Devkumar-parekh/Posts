import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PrivateRoute = ({ comp }) => {
  const loggedin = true;
  console.log(comp);
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedin) {
      // return <>Ok{comp}</>;
      showComponent();
    } else {
      navigate("404");
    }
  }, []);
  const showComponent = () => {
    return <>ok{comp}</>;
  };
};
export default PrivateRoute;
