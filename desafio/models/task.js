const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    _id: {type: String, require: false},
    title: {type: String, require: false},
    description: {type: String, require: false},
    createdAt: {type: Date, require: false},
    updatedAt: {type: Date, require: false},
    task: [
        {
        title: {type: String, require: false},
        taskRelevance: {type: Number, require: false},
        completed: {type: Boolean, require: false},
        createdAt: {type: Date, require: false},
        updatedAt: {type: Date, require: false},
        },
        {
        title: {type: String, require: false},
        taskRelevance: {type: Number, require: false},
        completed: {type: Boolean, require: false},
        createdAt: {type: Date, require: false},
        updatedAt: {type: Date, require: true},
        }
        ]
});

module.exports = mongoose.model('task', taskSchema)