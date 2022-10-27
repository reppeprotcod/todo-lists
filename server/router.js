import { Router } from "express";
import {check} from 'express-validator';
import AuthController from "./authController.js";
import authMiddleware from "./middleware/auth.middleware.js";
import ListController from "./listController.js";

const router = new Router();

//authorization router

router.post('/registration', [
    check('username', "user name cannot be empty").notEmpty(),
    check('password', "password length cannot be less than 4 and more than 10").isLength({min: 4, max: 10})
], AuthController.registration);
router.post('/login', AuthController.login);
router.get('/lists', authMiddleware, AuthController.getLists);
router.post('/lists', authMiddleware, AuthController.addList);
router.get('/lists/:id', authMiddleware, ListController.getList);
router.post('/lists/:id', authMiddleware, ListController.addNote);
router.delete('/lists/:id', authMiddleware, AuthController.deleteList);
router.delete('/lists/:list_id/:index', authMiddleware, ListController.deleteNote);

export default router;