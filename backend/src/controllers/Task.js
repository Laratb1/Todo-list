const Task = require('../modules/Taks.js');

module.exports = {
    async store(req,res){
        const { task, done } = req.body;
        try{
            const newTask = await Task.create({ task, done });
            res.status(200).json(newTask);
        }catch (error){
            console.error(error);
            return res.status(500);
        }

        return res.status(200).json(newTask);
    },

    async index(req, res) {
        let content;
    
        try {
          content = await Task.find();
    
          return res.json(content).status(200);
        } catch (err) {
          throw new Error("Cat't get content!");
        }
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