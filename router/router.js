import { Router } from "express";
import {  index, url, urldirector, urlgenrator } from "../controller/controller.js";

const router = Router();

router.route("/url").post(urlgenrator);
router.route("/home").get(index)
router.route("/url").get(url);

// router.route("/:shortid").get(dynamicroute);
router.route("/:shortid").get(urldirector)


export default router;
