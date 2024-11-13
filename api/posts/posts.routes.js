const upload = require("../../middleware/multer");
const express = require("express");
const router = express.Router();
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
} = require("./posts.controllers");

router.get("/", postsGet);
router.post("/", upload.single("image"), postsCreate);

router.delete("/:postId", postsDelete);

router.put("/:postId", upload.single("image"), postsUpdate);

module.exports = router;
