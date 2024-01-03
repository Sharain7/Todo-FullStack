//here we will create the schemas
const mongoose = require("mongoose");
//mongodb url 
//mongodb+srv://admin:123456780@cluster0.ovji0ym.mongodb.net/
mongoose.connect("mongodb+srv://admin:123456780@cluster0.ovji0ym.mongodb.net/todos")
const todoScema = mongoose.Schema ( {
    title: String ,
    description : String ,
    completed: Boolean

})
const todo = mongoose.model('todos',todoScema);
module.exports = {
    todo:todo 
}
