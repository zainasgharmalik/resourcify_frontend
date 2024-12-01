import Login from "../pages/auth/Login";
import Home from "../pages/landing/Home";

export const routes = [
  {
    title: "Home",
    path: "/",
    element: Home,
  },

  {
    title: "Login",
    path: "/login",
    element: Login,
  },
];
