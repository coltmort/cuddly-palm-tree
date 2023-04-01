const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  const userId = req.session.user_id
  const userData = await User.findByPk(userId, {include: {all: true, nested: true}, exclude: ['password']})
  const data = userData.get({plain: true})
  for (let i = 0; i < data.Posts.length; i++) {
    let element = data.Posts[i];
    element.createdAt = element.createdAt.toDateString()
  }

  const postData = await Post.findAll({
        where: {userId: userId},
        include: {User, all: true}

    });
    console.log(postData)

      let posts =  postData.map((post) => post.get({ plain: true }));

      for (let i = 0; i < posts.length; i++) {
        let element = posts[i];
        element.createdAt = element.createdAt.toDateString()
      }

  res.render('dashboard', {data, posts,
    logged_in: req.session.logged_in,
  })
})

router.get('/addpost', withAuth, async (req, res) => {
  res.render('addpost')
})

module.exports = router;
