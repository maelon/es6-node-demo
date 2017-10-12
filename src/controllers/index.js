const root = (req, res) => {
    res.render('index');
};

const fib = (req, res) => {
    // eslint-disable-line global-require
    const fibLib = require('../lib/index').default;
    const n = parseInt(req.params.n) || 0;
    const ret = [];
    for (let i = 0; i < n; i++) {
        ret.push(fibLib(i));
    }
    res.render('fib', { ret });
};

export default { root, fib };
