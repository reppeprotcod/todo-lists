import mongoose, { Types } from "mongoose";

const User = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    lists: [{type: Types.ObjectId, ref: 'List'}]
});

export default mongoose.model('User', User);