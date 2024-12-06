import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { adminRoutes, authRoutes, labAttendantRoutes, librarianRoutes, routes } from "./routes";
import Header from "./components/Header";

import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/user";
import Login from "./pages/auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./pages/other/Loading";
import toast, { Toaster } from "react-hot-toast";
import { sLabAttendantRoutes, sLibrarianRoutes } from "./routes/sidebarRoute";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, loading, error, message } = useSelector(
    (state) => state.user
  );
  const {
    loading: libraryLoading,
    error: libraryError,
    message: libraryMessage,
  } = useSelector((state) => state.library);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [error, message]);

  return loading ? (
    <Loading />
  ) : (
    <Router>
      <Header isAuthenticated={isAuthenticated} user={user} />

      <Routes>
        {routes.map((r, index) => (
          <Route key={index} path={r.path} element={<r.element />} />
        ))}

        {authRoutes.map((r, index) => (
          <Route
            key={index}
            path={r.path}
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect={
                  user && user.role === "admin"
                    ? "/admin"
                    : user && user.role === "librarian"
                    ? "/librarian"
                    : user && user.role === "lab_attendant"
                    ? "/lab_attendant"
                    : "/"
                }
              >
                <r.element />
              </ProtectedRoute>
            }
          />
        ))}

        {adminRoutes.map((r, index) => (
          <Route
            key={index}
            path={r.path}
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/login"
              >
                <Sidebar component={r.element} routes={adminRoutes} />
              </ProtectedRoute>
            }
          />
        ))}

        {librarianRoutes.map((r, index) => (
          <Route
            key={index}
            path={r.path}
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/login"
              >
                <Sidebar component={r.element} routes={sLibrarianRoutes} />
              </ProtectedRoute>
            }
          />
        ))}

        {labAttendantRoutes.map((r, index) => (
          <Route
            key={index}
            path={r.path}
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/login"
              >
                <Sidebar component={r.element} routes={sLabAttendantRoutes} title={r.title} />
              </ProtectedRoute>
            }
          />
        ))}
      </Routes>

      <Toaster
        toastOptions={{
          style: {
            fontFamily: "gilroy_medium",
          },
        }}
      />
    </Router>
  );
};

export default App;
