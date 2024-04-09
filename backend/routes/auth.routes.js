import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js"; //importing the signup, login, logout functions from the auth.controller.js

const router = express.Router(); //creating a router

router.get("/signup", signup); //creating a route for signup

router.get("/login", login); //creating a route for login

router.get("/logout", logout); //creating a route for logout

export default router; //exporting the router
