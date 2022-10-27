import bcrypt from "bcryptjs/dist/bcrypt.js";
import User from "./models/User.js";
import List from "./models/List.js";
import { validationResult } from "express-validator";
import jsonwebtoken from "jsonwebtoken";
import { conf } from "./config.js";


const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jsonwebtoken.sign(payload, conf.secret, {expiresIn: '24h'});
}

class AuthController{
    async registration(req, res){
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                res.status(400).json({message: "registration error"}, errors);
            }

            const {username, password} = req.body;

            const candidate = await User.findOne({username});
            if(candidate) {
                res.status(400).json({message: "User with such name already exists"});
            }

            const hashPassword = bcrypt.hashSync(password, 7);
            //const lists = await List.find();

            const user = new User({username, password: hashPassword});
            await user.save();
            res.json({user});
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "registration error"});
        }
    }

    async login(req, res){
        try {
            const {username, password} = req.body;

            const user = await User.findOne({username});
            if(!user){
                res.status(400).json({message: "user is not found"});
            }

            const comparePassword = bcrypt.compareSync(password, user.password);
            if(!comparePassword) {
                res.status(400).json({message: "invalid password"});
            }

            const token = generateAccessToken(user._id);
            res.json({token});
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "login error"});
        }
    }

    async getLists(req, res){
        try {
            const lists = await List.find({owner: req.user.id}); //???
            res.json({lists});
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "error"});
        }
    }

    async addList(req, res){
        try {
            const { title } = req.body;
            const list = new List({title, owner: req.user.id});
            await list.save();
            const user = await User.findById(req.user.id);
            user.lists.push(list._id);
            await user.save();
            res.json({message: "List successfully added"});//or ({list})
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "error"});
        }
    }

    async deleteList(req, res){
        try {
            const list = await List.findByIdAndDelete(req.params.id);
            if (!list) {
                res.status(404).json({message: "There is no list with such id"});
            }
            res.json({list});
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "error"});
        }
    }
}

export default new AuthController();