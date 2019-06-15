const express = require('express')
const uploadConfig = require('./config/upload')
const multer = require('multer')
const routes = new express.Router()

const upload = multer(uploadConfig)
const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')

routes.get('/posts', PostController.index)
routes.post('/posts', upload.single('image'), PostController.store)
routes.delete('/posts/:id', PostController.delete)

routes.post('/posts/:id/like', LikeController.store)

module.exports = routes
// routes.get('/')
