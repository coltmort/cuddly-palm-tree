const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/addpost', withAuth, async (req, res) => {
    res.render('addpost')
  })

router.get("/:id(\\d+)", withAuth, async (req, res) => {

    let id = req.params.id

    try {
        let postData = await Post.findByPk(id, {include: {all: true, nested: true}})
        let post = await postData.get({plain: true})
        let commentsData = await Comment.findAll({where: {PostID: id}, include:{all: true, nested: true}})

        let comments = commentsData.map((comment) => comment.get({plain: true}))

        comments.forEach((comment) => comment.createdAt = comment.createdAt.toDateString())

        let data = {post, comments}
        if(req.session.logged_in){
            res.render('postfocus', {data,
            logged_in: req.session.logged_in,})
        } else {
            res.render('login')
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

router.post('/', withAuth, async (req, res) => {
    try {

        const userId = req.session.user_id
        await Post.create({title: req.body.title, post: req.body.post, userId: userId})
        //
        res.render('dashboard', {logged_in:req.session.logged_in})



    } catch (err) {
        res.status(400)
    }
})

router.delete('/:id', withAuth, async(req, res) => {
    const postId = req.params.id
    const userId = req.session.user_id

    const postdata = await Post.findOne({where: {id: postId}})
    const post = await postdata.get({plain:true})


    // check if user that posted is the one deleting
    if(post.userId !== userId){
        res.status(400).send(`You cannot delete a different user's posts`)
    }

    await Post.destroy({where: {id: req.params.id}})
    res.status(200).send('deleted')
})




router.get('/updatepost/:id', withAuth, async(req, res) => {
let postId = req.params.id

const postData = await Post.findOne({where: {id: postId}})
const post = postData.get({plain:true})

res.render('updatepost', {post,
logged_in: req.session.logged_in})
})


router.put('/:id', withAuth, async(req, res) => {
    const postId = req.params.id
    const userId = req.session.user_id

    const postdata = await Post.findOne({where: {id: postId}})
    const post = await postdata.get({plain:true})


    // check if user that posted is the one deleting
    if(post.userId !== userId){
        res.status(400).send(`You cannot update a different user's posts`)
    }

    await Post.update({title: req.body.title, post: req.body.post, userId: userId},{where: {id: req.params.id}})
    res.status(200).send('updated')
})
module.exports = router;
