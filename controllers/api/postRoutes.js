const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get("/:id", withAuth, async (req, res) => {
    let id = req.params.id
    try {
        let postData = await Post.findByPk(id, {include: {all: true, nested: true}})
        let post = postData.get({plain: true})
        let commentsData = await Comment.findAll({where: {PostID: id}, include:{all: true, nested: true}})
        console.log(commentsData)
        let comments = commentsData.get({plain: true})

        post.createdAt = post.createdAt.toDateString()
        res.render('postfocus', {post, comments,
        logged_in: req.session.logged_in,})
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})
module.exports = router;