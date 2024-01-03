const express = require('express')
const app = express()
const {createTodo, updateTodo} = require("./types");
const { todo } = require('./db');
const port = 3000

app.use(express.json());
app.post("/todo" , async function(req,res){
    const createPayload = req.body 
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return ; 
    }
    //put in the mongo db
    await todo.create({
        title: createPayload.title ,
        description : createPayload.description ,
        completed : false 
    })
    res.json({
        msg:"Todo Created"
    })

})
app.get("/todos" , async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos

    })

    
}) 
//marks completed or not 
app.put("/completed" , async function(req,res){
    const updatePayload = req.body ;
    const parsedUpdatedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedUpdatedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return ; 
        

    }
    await todo.update({
        _id: req.body.id 
    } , {
        completed: true 
    }
    )
    res.json({
        msg:"todo marked is updated "
    })
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})