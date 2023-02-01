import express from "express";
import { GetHome } from "../controllers/NoteBookController.js";

const rout = express.Router();

rout.get('/', GetHome);

export default rout;