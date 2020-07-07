require('dotenv').config({ path: __dirname + "/./.env" });
const express = require('express');
const pc = require('./controllers/postController');
const ac = require('./controllers/authController');
const app = express();
const massive = require('massive');
const session = require('express-session');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json());

app.use(
  session({
    saveUninitialized: true,
    resave: false,
    secret: 'aosdhf;lasjdf;lijas;ldkfjh;hjdsaf;kjhasl;kdjh',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 36
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('database is all good');
  app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`));
});

app.get('/api/posts', pc.allPosts);
app.get('/api/search', pc.searchPosts);
app.post('/api/posts', pc.createPost);
app.put('/api/posts/:id', pc.updatePost);
app.delete('/api/posts/:id', pc.deletePost);

app.get('/auth/check', ac.check)
app.post('/auth/register', ac.register )
app.post('/auth/login', ac.login )
