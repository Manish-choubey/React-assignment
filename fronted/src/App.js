import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Root from "../src/componenet/Root";
import Login from "./pages/Login/LoginPage";
import DashboardPage from "./pages/dashBoard/DashboardPage";
import DataUpload from "./pages/DataUploadPage";

import { isAuthenticated } from "./componenet/Navbar";
import "./App.css";

const ProtectedRoute = ({ element: Element, loader, ...rest }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authStatus = await loader();
        setIsAuth(authStatus);
      } catch (error) {
        setIsAuth(false);
      }
    };

    checkAuth();
  }, [loader]);

  if (isAuth === null) {
    return (
      <div style={{ textAlign: "center", marginTop:"200px" }}>Ohh! you need to login first...</div>
    );
  }

  return isAuth ? <Element {...rest} /> : <Navigate to="/" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Login /> },
      {
        path: "/dashboard",
        element: (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute
                  loader={isAuthenticated}
                  element={DashboardPage}
                />
              }
            />
          </Routes>
        ),
      },
      { path: "/upload", element: <DataUpload /> },
    ],
  },
]);

function App() {
  return (
    <div className="main">
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
