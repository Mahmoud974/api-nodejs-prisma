import { Router } from "express";
import {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../controllers/user.route";

// Users layout Route
const userRoute = Router();

userRoute.post("", createUser);
userRoute.get("", getUsers);
userRoute.get("/:userid", getUser);
userRoute.delete("/:userid", deleteUser);
userRoute.patch("/:userid", updateUser);

export default userRoute;
