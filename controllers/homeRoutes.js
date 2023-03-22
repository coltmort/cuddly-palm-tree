const router = require('express').Router();
const { User, Comment, Post } = require('../models');
const withAuth = require('../utils/auth');


// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {
  try{
    const postData = await Post.findAll({

      include: {User, all: true}

  });

    let posts =  postData.map((post) => post.get({ plain: true }));

    for (let i = 0; i < posts.length; i++) {
      let element = posts[i];
      element.createdAt = element.createdAt.toDateString()
    }

    res.render('home', {
      posts,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
