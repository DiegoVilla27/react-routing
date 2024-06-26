import AboutPage from "..";
import PrivateRouteGuard from "../../../guards/auth";
import { RouteObject } from "react-router-dom";

const AboutPageRoutes: RouteObject = {
  path: "/about",
  element: (
    <PrivateRouteGuard>
      <AboutPage />
    </PrivateRouteGuard>
  )
};
export default AboutPageRoutes;
