const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', (req, res) => {
    let comment = req.body.comment
    let userId = req.session.user_id
    let PostId = req.params.id
    // console.log(user, PostID)
    Comment.create({comment: comment, userId: userId, PostId: PostId })
    // res.redirect(`/api/post/${PostId}`)
    res.status(200).send('posted')
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    Comment.destroy({where: {id: id}})
    res.status(200).send('destroyed')
    
} )
module.exports = router;