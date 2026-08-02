const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service')
const postModel = require('./models/post.model');
// const noteModel = require('./models/note.model');   
const app = express();
app.use(express.json());

const upload = multer({storage: multer.memoryStorage()})


// app.post('/notes',async(req,res)=>{
//     const data = req.body
//     await noteModel.create({
//         title:data.title,   
//         description:data.description
//     })
//     res.status(201).json({
//         message: "Notes created"
//     })
// })

// app.delete('/notes/:id',async(req,res)=>{
//     const id = req.params.id
//     await noteModel.findByIdAndDelete(id)
//     res.status(200).json({
//         message: "Notes deleted successfully" 
//     })
// })


// app.get('/notes', async(req,res)=>{
//     const notes = await noteModel.find()
//     res.status(200).json({
//         message: "Notes created successfully",
//         notes:notes
//     })
// })

// app.patch('/notes/:id',async(req,res)=>{
//     const id = req.params.id
//     const description = req.body.description
//     await noteModel.findOneAndUpdate(
//         { _id: id },   
//         { description: description }
//     )
//     res.status(200).json({
//         message:"notes updated successfully"
//     })
// })

app.post('/create-post', upload.single("image"),async(req,res)=>{
    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer)

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message:"Post created successfully",
        post
    })

})


app.get("/posts",  async(req, res)=>{
    const posts = await postModel.find()
    return res.status(200).json({
        message:"Posts fetched successfully",
        posts
    })
})

module.exports = app;