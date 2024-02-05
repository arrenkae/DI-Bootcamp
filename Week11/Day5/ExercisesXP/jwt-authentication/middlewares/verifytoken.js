import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const verifytoken = (req, res, next) => {
    const accesstoken = req.cookies.token;
    const refreshtoken = req.cookies.refreshToken;
    const secret = process.env.ACCESS_TOKEN_SECRET;

    if (!accesstoken) {
        return res.status(401).json({ message: 'Access token not found' });
    }    

    jwt.verify(accesstoken, secret, (err, decoded) => {
        if (err) {
          if (!refreshtoken) {
            return res.status(403).json({ message: 'Token verification failed' });
          }
          jwt.verify(refreshtoken, secret, (err, decoded) => {
            if (err) {
              return res.status(403).json({ message: 'Refresh token verification failed' });
            }
            const newAccessToken = jwt.sign({ id: user.id, username: user.username }, secret, {
              expiresIn: '1h'
            });
            res.cookie('token', newAccessToken, { httpOnly: true });
            req.user = decoded.user;
            next();
          });
        } else {
          req.user = decoded.user;
          next();
        }
      });
} 