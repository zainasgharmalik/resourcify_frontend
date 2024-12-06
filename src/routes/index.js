import Dashboard from "../pages/admin/Dashboard";
import Login from "../pages/auth/Login";
import AddLabResoruce from "../pages/lab_attendant/AddLabResoruce";
import LabResources from "../pages/lab_attendant/LabResources";
import Home from "../pages/landing/Home";
import AddNewLibraryItem from "../pages/librarian/AddNewLibraryItem";
import LibraryItems from "../pages/librarian/LibraryItems";

export const routes = [
  {
    title: "Home",
    path: "/",
    element: Home,
  },
];

export const authRoutes = [
  {
    title: "Login",
    path: "/login",
    element: Login,
  },
];

export const adminRoutes = [
  {
    title: "Admin Dashboard",
    path: "/admin",
    element: Dashboard,
  },

  {
    title: "Library Items",
    path: "/library-items",
    element: Dashboard,
  },
];

export const librarianRoutes = [
  {
    path: "/librarian",
    title: "Library Items",
    element: LibraryItems,
  },

  {
    path: "/librarian/add",
    title: "Add Library Items",
    element: AddNewLibraryItem,
  },
];

export const labAttendantRoutes = [
  {
    path: "/lab_attendant",
    title: "Lab Resources",
    element: LabResources,
  },

  {
    path: "/lab_attendant/add",
    title: "Add Lab Resource",
    element: AddLabResoruce,
  },
];
