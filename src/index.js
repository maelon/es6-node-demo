import path from 'path';
import express from 'express';

import rootRouter from './routes/index';

const app = express();

const start = () => {
    // set view
    app.set('views', path.join(__dirname, './views'));
    app.set('view engine', 'ejs');

    // app.use(express.favicon());

    app.use('/', rootRouter);

    app.listen(3000, () => {
        console.log('Example app listening on port 3000!');
    });
};

export default { start };
