const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get("/:id", withAuth, async (req, res) => {
    let id = req.params.id

    try {
        let postData = await Post.findByPk(id, {include: {all: true, nested: true}})
        let post = postData.get({plain: true})
        let commentsData = await Comment.findAll({where: {PostID: id}, include:{all: true, nested: true}})

        let comments = commentsData.map((comment) => comment.get({plain: true}))

        comments.forEach((comment) => comment.createdAt = comment.createdAt.toDateString())
        // console.log('comments', comments)
        let data = {post, comments}
        res.render('postfocus', {data,
        logged_in: req.session.logged_in,})
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

router.post('/', withAuth, async (req, res) => {
    try {

        const userId = req.session.user_id
        Post.create({title: req.body.title, post: req.body.post, userId: userId})
        // 
        res.status(200).send('posted')


    } catch (err) {
        res.status(400)
    }
})


module.exports = router;