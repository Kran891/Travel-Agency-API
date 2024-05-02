import { Router } from "express";
import { createUserAsync, getUserByIdAsync, updateUserAsyc, userSignInAsync } from "./controllers/user-controller";

// This file is not required if you're using YAML for routing 
//To know routing through YAML please refer oas.yaml in api folder
const router=Router()
router.route("/create").post(createUserAsync);
router.route("/signin").post(userSignInAsync);
router.route("/:id/id").get(getUserByIdAsync);
router.route("/:id/update").post(updateUserAsyc);

export {router as UserRouting};