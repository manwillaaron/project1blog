const bcrypt = require('bcryptjs');
let saltRounds = 10;

module.exports = {
  async login(req, res) {
    const db = req.app.get('db');
    const { username, password } = req.body;
    const [admin] = await db.check_admin(username);
    if (!admin) return res.status(404).send(`username does not exist`);
    const authorized = bcrypt.compareSync(password, admin.hash);
    if (!authorized) return res.status(404).send(`password is incorrect`);
    req.session.admin = {
      id: admin.id,
      username: username
    };
    res.sendStatus(200);
  },
  async register(req, res) {
    const db = req.app.get('db');
    const { username, password, passwordCheck, blogName, name } = req.body;
    const [admin] = await db.check_admin(username);
    // if (password !== passwordCheck)
    //   return res.status(404).send(`password does not match`);
    if (admin) return res.status(404).send(`${username} is already taken`);
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    const [newAdmin] = await db.create_admin([username, hash, blogName, name]);
    req.session.admin = {
      id: newAdmin.id,
      username: username
    };
    res.sendStatus(200);
  },
  check(req, res) {
    if (req.session && req.session.admin) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
};
