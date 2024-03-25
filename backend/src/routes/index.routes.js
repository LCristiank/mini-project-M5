import { Router } from "express";
import { ongRoute } from "./ong.routes.js";

const routes = Router();

// routes.use(userRoute);
routes.use(ongRoute);

export { routes }