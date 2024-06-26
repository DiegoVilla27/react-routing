import AboutPageRoutes from "../../pages/about/routes";
import HomePageRoutes from "../../pages/home/routes";
import UsersPageRoutes from "../../pages/users/routes";
import { RouteObject } from "react-router-dom";

const RoutesPrivate: RouteObject[] = [HomePageRoutes, UsersPageRoutes, AboutPageRoutes];

export default RoutesPrivate;
