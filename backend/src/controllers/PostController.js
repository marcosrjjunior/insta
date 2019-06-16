const Post = require('../models/Post');
const path = require('path');
const fs = require('fs');

module.exports = {
  async index(req, res) {
    const posts = await Post.find().sort('-createdAt');

    return res.json(posts);
  },

  async store(req, res) {
    const { author, place, description, hashtags } = req.body;
    const { originalname: name, size, key, location: image = '' } = req.file;

    console.log(req.file);
    // const [name] = image.split('.');
    // const fileName = `${name}.jpg`;

    // await sharp(req.file.path)
    //   .resize(500)
    //   .jpeg({ quality: 70 })
    //   .toFile(path.resolve(req.file.destination, 'resized', fileName));

    // fs.unlinkSync(req.file.path);

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      size,
      key,
      image
    });

    req.io.emit('post', post);

    return res.json(post);
  },

  async delete(req, res) {
    const post = await Post.findById(req.params.id);

    await post.delete();

    return res.json('post deleted');
  }
};
