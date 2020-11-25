const debug = require('debug')('tgan');
const fetch = require('node-fetch');

module.exports = (apiUrl = 'https://shrtco.de/tgan/api') => (ctx, next) => {
    next();

    if (ctx.from) {
        const params = new URLSearchParams();
        params.append('action', 'record');
        params.append('token', ctx.tg.token);
        params.append('user_id', ctx.from.id);

        fetch(`${apiUrl}?${params}`)
            .then(res => res.json())
            .then(res => debug(res.ok ? res.message : `error: ${res.error}`))
            .catch(err => debug('error:', err));
    }
};
