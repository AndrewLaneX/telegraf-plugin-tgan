const debug = require('debug')('tgan');
const fetch = require('node-fetch');

const apiUrl = 'https://shrtco.de/tgan/api';

module.exports = (ctx, next) => {
    next();

    if (ctx.from) {
        const params = new URLSearchParams();
        params.append('action', 'record');
        params.append('token', ctx.tg.token);
        params.append('user_id', ctx.from.id);

        fetch(`${apiUrl}?${params}`)
            .then(res => res.json())
            .then(res => debug(res.ok ? res.message : `error: ${res.error}`));
    }
};
