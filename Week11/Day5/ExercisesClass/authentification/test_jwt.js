import jwt from "jsonwebtoken";

/** sign({payload}, secret-code, {expire})
 * payload
 * secret code
 * expire
 */

// const token = jwt.sign(
//     {email: 'zivuch@gmail.com', userid:16},
//     'iTUKA@ZQJ73v',
//     {
//         expiresIn: '1d',
//     }
// );

// console.log(token);

const mytoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InppdnVjaEBnbWFpbC5jb20iLCJ1c2VyaWQiOjE2LCJpYXQiOjE3MDY3ODI0MzksImV4cCI6MTcwNjg2ODgzOX0.9iEvKn073Vjl1oh7tmoNcPdq82dzRnL3pqUpwC1Cxbk';

/**
 * verify(token, secret, (err, decoded)=>{})
 */

jwt.verify(mytoken, 'iTUKA@ZQJ73v', (err, decoded) => {
    if (err) return console.log(err.message);
    console.log(decoded);
})