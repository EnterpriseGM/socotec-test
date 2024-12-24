const shajs = require('sha.js');
const db = require('../ports/secondary/db');
const User = require('../domain/user')

const SECRET = process.env.SECRET || 'test-dev-secret';
/**
 * Generate hash password
 * Generate online: https://emn178.github.io/online-tools/sha256.html
 * @param {string} email
 * @param {string} password
 */
const hashPassword = (email, password) => shajs('sha256').update(`${email}${password}${SECRET}`).digest('hex');

const authenticateUser = async (email, password) => {
  const hash = hashPassword(email, password);
  const queryText = {
    text: ` SELECT s.id, s.email, s.first_name as firstName, s.last_name as lastName
              FROM users s
              WHERE email = $1 AND password = $2`,
    values: [email, hash],
  };
  try {
    const { rows } = await db.query(queryText);
    if (rows[0]) {
      const user = rows[0];
      return user;
    }
    throw (new Error('Bad credentials'));
  } catch (error) {
    throw (new Error('Bad credentials'));
  }
};

const getUserById = async (id) => {
  const queryText = {
    text: `SELECT email, first_name, last_name, country, city, phone_number, position FROM users WHERE id = $1`,
    values: [id],
  };
  try {
    const { rows } = await db.query(queryText);
    if (rows[0]) {
      const user = rows[0];
      return User.mapper(user).toJSON();
    }
    throw (new Error('User not found'));
  } catch (error) {
    throw (new Error('Failed to get user'));
  }
};


const createUser = async (user) => {
  // Check if a user already exists with the same email or phone number
  const checkQueryText = {
    text: `SELECT 1 FROM users WHERE email = $1 LIMIT 1`,
    values: [user.email],
  };

  try {
    const existingUser = await db.query(checkQueryText);

    // If the user already exists, throw an error
    if (existingUser.rows.length > 0) {
      throw new Error('User with this email already exists');
    }

    // If the user doesn't exist, proceed to create a new user
    const hash = hashPassword(user.email, user.password);
    const queryText = {
      text: `INSERT INTO users (email, password, first_name, last_name, country, city, phone_number, position) 
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      values: [user.email, hash, user.firstName, user.lastName, user.country, user.city, user.phoneNumber, user.position],
    };

    await db.query(queryText);
  } catch (error) {
    throw new Error(error.message || 'Failed to create user');
  }
};

const editUser = async (user) => {
  const hash = hashPassword(user.email, user.password);
  const queryText = {
    text: `UPDATE users 
           SET email = $1, password = $2, first_name = $3, last_name = $4, country = $5, city = $6, phone_number = $7, position = $8
           WHERE id = $9`,
    values: [user.email, hash, user.firstName, user.lastName, user.country, user.city, user.phoneNumber, user.position, user.id],
  };
  try {
    await db.query(queryText);
  } catch (error) {
    throw (new Error('Failed to edit user'));
  }
};

const deleteUser = async (id) => {
  const queryText = {
    text: `DELETE FROM users WHERE id = $1`,
    values: [id],
  };
  try {
    await db.query(queryText);
  } catch (error) {
    throw (new Error('Failed to delete user'));
  }
};


module.exports = {
  authenticateUser,
  getUserById,
  createUser,
  editUser,
  deleteUser,
};
