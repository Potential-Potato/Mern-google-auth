const router = require('express').Router()
const Post = require('../models/post')


router.post('/', async (req, res) => {
    try{
        const { title, body } = req.body 
        if(!title || !body){
            return res.status(400).json({
                error: true,
                message: "Title and body are required."
            });
        }
        const newPost = await Post.create({
            title: title,
            body: body,
            createdBy: req.user.id,
            name: req.user.name.givenName
        })

        return  res.status(202).json({newPost})
    }catch(error){
        console.log(error)
        res.status(500).json({
            error: true,
            message: "Internal Server Error"
        });
    }
})

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('createdBy', 'name email'); // Populate createdBy field with name and email of the user
        res.status(200).json({ posts });
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({
            error: true,
            message: "Internal Server Error"
        });
    }
});

module.exports = router