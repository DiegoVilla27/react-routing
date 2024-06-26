import UsersPage from "..";
import PrivateRouteGuard from "../../../guards/auth";
import UserPage from "../pages/user";
import { RouteObject } from "react-router-dom";

const UsersPageRoutes: RouteObject = {
  path: "users",
  element: (
    <PrivateRouteGuard>
      <UsersPage />
    </PrivateRouteGuard>
  ),
  children: [
    {
      path: ":id",
      element: <UserPage />
    }
  ]
};
export default UsersPageRoutes;
