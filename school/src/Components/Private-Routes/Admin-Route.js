import { Navigate, Outlet } from "react-router-dom";

const CheckAdmin = () => {
  const login = localStorage.getItem("info");
  // console.log(login);
  if ((login === "admin") | "user") {
    return {
      role: true,
    };
  } else if (login == null) {
    return {
      role: false,
    };
  }
};

const AdminLogin = () => {
  let { role } = CheckAdmin();

  return role ? <Outlet /> : <Navigate to="login" />;
};

export default AdminLogin;
