import jwt from 'jsonwebtoken';
import { conf } from '../config.js';


function authMiddleware (req, res, next) {
    if(req.method === 'OPTIONS') return next();

    try {
        const token = req.headers.authorization.split(' ')[1];

        if(!token){
            return res.status(401).json({message: "No authorization"});
        }

        const decoded = jwt.verify(token, conf.secret);
        req.user = decoded;
        next();
    } catch (e) {
        console.log(e);
        return res.status(401).json({message: "something wrong"});
    }
}

export default authMiddleware;