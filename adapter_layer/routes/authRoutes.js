import * as authController from '../controllers/authController.js';
import express from "express";

const authRoutes = express.Router();


authRoutes.post('/register', authController.registerStudent);
authRoutes.get("/profile/:id", authController.getStudentProfile);

export default authRoutes;