import {Router} from "express";
import { authenticationRoutes } from "./authenticate.routes";
import { categoriesRoutes} from "./categories.routes";
import { specificationRoutes } from "./Specification.Routes";
import { usersRoutes } from "./Users.Routes";


const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications",specificationRoutes);
router.use("/users", usersRoutes);
router.use(authenticationRoutes);

export { router};