const User = require('./User');
const Post = require('./post')
const Comment = require('./comment')

User.hasMany(Comment)
User.hasMany(Post)
Post.hasMany(Comment)
Post.belongsTo(User)
Comment.belongsTo(Post)
Comment.belongsTo(User)

module.exports = { User, Post, Comment };
