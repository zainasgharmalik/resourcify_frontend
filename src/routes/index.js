import Dashboard from "../pages/admin/Dashboard";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import TeacherLogin from "../pages/auth/TeacherLogin";
import AddLabResoruce from "../pages/lab_attendant/AddLabResoruce";
import LabResources from "../pages/lab_attendant/LabResources";
import UpdateLabResource from "../pages/lab_attendant/UpdateLabResource";
import Home from "../pages/landing/Home";
import LabResourcesListing from "../pages/landing/LabResourcesListing";
import LibraryListing from "../pages/landing/LibraryListing";
import RoomsListing from "../pages/landing/RoomsListing";
import AddNewLibraryItem from "../pages/librarian/AddNewLibraryItem";
import LibraryItems from "../pages/librarian/LibraryItems";
import UpdateLibraryItem from "../pages/librarian/UpdateLibraryItem";

export const routes = [
  {
    title: "Home",
    path: "/",
    element: Home,
  },
  {
    title: "Library",
    path: "/library",
    element: LibraryListing,
  },

  {
    title: "Library",
    path: "/lab-resources",
    element: LabResourcesListing,
  },

  
  {
    title: "Discussion Rooms",
    path: "/discussion-rooms",
    element: RoomsListing,
  },
];

export const authRoutes = [
  {
    title: "Login",
    path: "/login",
    element: Login,
  },

  {
    title: "Teacher Login",
    path: "/login/teacher",
    element: TeacherLogin,
  },

  {
    title: "Coordinators Login",
    path: "/login/coordinator",
    element: TeacherLogin,
  },

  {
    title: "Register",
    path: "/register",
    element: Register,
  },

  
  {
    title: "Forgot Password",
    path: "/forgotpassword",
    element: ForgotPassword,
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

  {
    path: "/librarian/item/:id/update",
    title: "Update Library Item",
    element: UpdateLibraryItem,
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

  {
    path: "/lab_attendant/resource/:id/update",
    title: "Update Lab Resource",
    element: UpdateLabResource,
  },
];
