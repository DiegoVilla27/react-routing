import LoginPage from "..";
import PublicRouteGuard from "../../../guards/noauth";
import { RouteObject } from "react-router-dom";

const LoginPageRoutes: RouteObject = {
  path: "/login",
  element: (
    <PublicRouteGuard>
      <LoginPage />
    </PublicRouteGuard>
  )
};

export default LoginPageRoutes;
