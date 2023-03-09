const Task = require('../modules/Taks.js');

module.exports = {
    async store(req,res){
        const { task, done } = req.body;
        const newTask = await Task.create({ task, done });

        return res.status(200).jason(newTask);
    },

    async delete(req, res, next){
        let content;
        const { _id } = req.params;

        try{
            content = await
            Task.findOneAndRemove({ _id });
        }catch (err){
            const error = new HttpError("Can't find content", 400);
            return next(error);
        }
        return res.status(200).json({ deletedTaks:content });
    },
}