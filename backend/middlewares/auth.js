const { decodeBase64 } = require('../app/util/index');

const auth = (req, res, next) => {
    if (req.headers && req.headers.authorization) {
      console.log(req.headers.authorization);
      
      const decodedToken = decodeBase64(req.headers.authorization);
      req.userId = decodedToken;
      next();
    } else {
      res.status(401).send({ error: 'Unauthorized' });
    }
}

module.exports = auth