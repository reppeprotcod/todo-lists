import List from "./models/List.js";

class ListController {
    async getList(req, res){
        try {
            const list = await List.findById(req.params.id) //???
            const notes = list.value;
            res.json({notes});//
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "error"});
        }
    }

    async addNote(req, res){
        try {
            const list = await List.findById(req.params.id);
            const {note} = req.body;
            list.value.push(note);
            await list.save();
            res.json({message: "note successfully added"});
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "error"});
        }
    }

    async deleteNote(req, res){
        try {
            const list = await List.findById(req.params.list_id);
            const note = list.value.splice(req.params.index, 1);
            if(!note) {
                return res.status(400).json({message: "there is no note with such id"});
            }
            await list.save();
            res.json({note});
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "error"});
        }
    }
}

export default new ListController();