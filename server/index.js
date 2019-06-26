const express = require('express')
const app = express()
require('dotenv').config({ path: __dirname + '/../.env' });
const { SERVER_PORT } = process.env;
const pc = require('./postController')
const url = '/api/posts/'
app.use(express.json())

app.get('/api/posts', pc.allPosts)
app.post('/api/posts',pc.createPost)
app.put('/api/posts', pc.updatePost)
app.delete('/api/posts', pc.deletePost)


app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`);
  });