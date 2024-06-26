import HomePage from "..";
import PrivateRouteGuard from "../../../guards/auth";
import { RouteObject } from "react-router-dom";

const HomePageRoutes: RouteObject = {
  path: "/",
  element: (
    <PrivateRouteGuard>
      <HomePage />
    </PrivateRouteGuard>
  )
};
export default HomePageRoutes;
