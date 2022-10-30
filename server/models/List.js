import mongoose, { Types } from "mongoose";

const List = new mongoose.Schema({
    title: {type: String, required: true},
    value: [{type: String, required: true}],
    owner: {type: Types.ObjectId, ref: 'User'}
});

export default mongoose.model('List', List);