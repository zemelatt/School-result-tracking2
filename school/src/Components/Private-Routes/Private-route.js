import { Navigate, Outlet } from "react-router-dom";

const chekLogin = () => {
  const login = localStorage.getItem("info");
  console.log(login);
  if (login === "user") {
    return {
      auth: true,
    };
  } else {
    return {
      auth: false,
    };
  }
};

const PrivateRoute = () => {
  let { auth } = chekLogin();

  return auth ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoute;
