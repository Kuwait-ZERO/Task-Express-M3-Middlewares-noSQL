const Post = require("../models/Post");

const findPost = async function (req, res, next, postSlug) {
  let foundPost;

  try {
    foundPost = await Post.findOne({ slug: postSlug });
    if (!foundPost) {
      const error = new Error("Post not found");
      error.status = 404;
      return next(error);
    }
  } catch (error) {
    next(error);
  }

  req.post = foundPost;
  next();
};

module.exports = findPost;
