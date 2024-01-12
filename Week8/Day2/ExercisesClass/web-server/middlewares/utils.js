const logger = (request, response, next) => {
    console.log('urls=>', request.url);
    console.log('params=>', request.params);
    console.log('method=>', request.method);
    next();
};

const auth = (request, response, next) => {
    const { admin } = request.query;
    if (admin === 'john') {
        next();
    } else {
        response.send('not authorized');
    }
};

module.exports = { logger, auth }