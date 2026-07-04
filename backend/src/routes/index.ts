import express from "express";
import tripRoute from "./trips";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/trips",
    route: tripRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
