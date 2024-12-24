const userService = require('../../services/user');
const User = require('../../domain/user')
const { encodeBase64 } = require('../../util/index');

const health = (_req, res) => res.send({ message: 'ok' })

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await userService.authenticateUser(email, password);
        const token = encodeBase64(userData.id.toString());
        res.status(200).send({ token });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

const logout = async (_req, res) => {
    try {
      res.clearCookie('token');
      res.status(200).send({ message: 'Logged out successfully' });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
}

const createUser = async (req, res) => {
    try {
      const user = new User(req.body);
      await userService.createUser(user);
      res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
}

const getUser = async (req, res) => {
    try {
      const id = req.userId;
      const userData = await userService.getUserById(id);
      res.status(200).send(userData);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
      const id = req.userId;
      const user = new User({id, ...req.body});
      await userService.editUser(user);
      res.status(200).send({ message: 'User updated successfully' });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
      const id = req.userId;
      await userService.deleteUser(id);
      res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
}

module.exports = {
    health,
    login,
    logout,
    createUser,
    getUser,
    updateUser,
    deleteUser,
}