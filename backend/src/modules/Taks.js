const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({ 
    task: String,
    done: Boolean,
});

module.exports = mongoose.model('Task',CardSchema);