const express = require('express');
const router = require('./src/app.router');
require('./db/sync')().then(() => {

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(router);
    app.use(express.static('public'));
    
    app.listen(3000);

});

