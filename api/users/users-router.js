const express = require('express');
const md = require('../middleware/middleware')

// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required

const User = require('./users-model')
const router = express.Router();

router.get('/', (req, res, next) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  User.get()
    .then( user => {
      res.status(200).json(user)
    })
    .catch (() => {
     next({ message: "The users information could not be retrieved" })
    })
  
});

router.get('/:id', md.validateUserId, (req, res) => {
  res.json(req.user)  
});

router.post('/', md.validateUser, (req, res, next) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  User.insert(req.body)
    .then(newUser => {      
      res.status(201).json(newUser)
    })
    .catch(next)
});

router.put('/:id', md.validateUserId, md.validateUser, (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  res.send(`put '/:id' wired`)
});

router.delete('/:id', md.validateUserId, (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  res.send(`put '/:id' wired`)
});

router.get('/:id/posts', md.validateUserId, (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
  res.send(`get '/:id/posts' wired`)
});

router.post('/:id/posts', md.validateUserId, md.validatePost, (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  res.send(`post '/:id/posts' wired`)
});

// do not forget to export the router

module.exports = router