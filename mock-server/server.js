const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const myAccountRouter = jsonServer.router(path.join(__dirname, 'api-myaccount.json'));
const shopRouter = jsonServer.router(path.join(__dirname, 'api-shop.json'));
const productRouter = jsonServer.router(path.join(__dirname, 'api-product.json'));
const subscriptionsRouter = jsonServer.router(path.join(__dirname, 'api-subscriptions.json'));
const mylistsRouter = jsonServer.router(path.join(__dirname, 'api-mylists.json'));
const authRouter = jsonServer.router(path.join(__dirname, 'auth.json'));
const statesRouter = jsonServer.router(path.join(__dirname, 'api-states.json'));
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
    if (req.method === 'POST') {
        if (req.url === '/auth/authenticate') {
            handleAuth(req, res);
        } else if (req.url === '/api/shop/cart/items') {
            handleUpdateCart(req, res);
        } else {
            res.sendStatus(500);
        }
    } else if (req.method === 'PUT') {
        if (req.url === '/api/shop/cart/items') {
            handleAddCart(req, res);
        } else {
            res.sendStatus(500);
        }
    } else if (req.method === 'DELETE') {
        if (req.url === '/api/shop/cart/items') {
            handleDeleteCart(req, res);
        } else {
            res.sendStatus(500);
        }
    } else if (req.method !== 'GET') {
        res.sendStatus(500);
    } else {
        next();
    }
});

const handleAuth = (req, res) => {
    const username =  req.body.username;
    console.log('/auth/authenticate [User:' + username + ']');
    if (!username || username === 'admin1') {
        res.sendStatus(401);
    } else {
        sendOKResponse(res, "/auth/authenticate");
    }
};

const handleAddCart = (req, res) => {
    const product =  req.body.product_id;
    const qty = req.body.qty;
    console.log('PUT /api/shop/cart/items [Product:' + product + ', Qtt: ]' + qty + ']');
    if (!product) {
        res.sendStatus(400);
    } else {
        sendOKResponse(res, "/api/shop/cart/items");
    }
};
const handleUpdateCart = (req, res) => {
    const product =  req.body.product_id;
    const qty = req.body.qty;
    console.log('POST /api/shop/cart/items [Product:' + product + ', Qtt: ]' + qty + ']');
    if (!product) {
        res.sendStatus(400);
    } else {
        sendOKResponse(res, "/api/shop/cart/items");
    }
};

const handleDeleteCart = (req, res) => {
    const product =  req.body.product_id;
    console.log('DELETE /api/shop/cart/items [Product:' + product + ']');
    if (!product) {
        res.sendStatus(400);
    } else {
        sendOKResponse(res, "/api/shop/cart/items");
    }
};

const sendOKResponse = (res, path) => {
    res.jsonp({
        "timestamp": new Date(),
        "status":200,
        "error":"OK",
        "message":"OK",
        "path": path
    });
};

server.use('/api/shop', jsonServer.rewriter({
    '/products?cat=:cat&scat=:scat': '/products?category=:cat&subCategory=:scat'
}));

server.use('/api/products', jsonServer.rewriter({
    '/categories': '/categories'
}));

server.use('/api/subscriptions', jsonServer.rewriter({
    '/categories?cat=:cat': '/categories?id=:cat',
    '/lists?cat=:cat&scat=:scat': '/lists?categrory=:cat&subCategory=:scat'
}));

server.use('/api/mylists', jsonServer.rewriter({
    '/:id/unitstats': '/lists?id=:id',
    '/:id/unitstats/:unitId': '/unitstats?listDefinitionId=:id&id=:unitId'
}));

mylistsRouter.render = (req, res) => {
    if (req.url.startsWith("/lists")) {
        var units = [];
        for (var i = 0; i < res.locals.data[0].unitCount; i++) {
            units.push({
                id: i,
                name: 'Unit ' + (i + 1),
                score: Math.floor(Math.random() * 100),
                totalCount: Math.floor(Math.random() * 500),
                completedCount: Math.floor(Math.random() * 500)
            });
        }
        res.jsonp({"id": res.locals.data[0].id, "units": units});
    } else if (req.url.startsWith("/unitstats")) {
        res.jsonp(res.locals.data);
    } else {
        res.sendStatus(404);
    }
};

// Setup routers
server.use('/auth', authRouter);
server.use('/api/myaccount', myAccountRouter);
server.use('/api/products', productRouter);
server.use('/api/subscriptions', subscriptionsRouter);
server.use('/api/mylists', mylistsRouter);
server.use('/api/shop', shopRouter);
server.use('/api/list', statesRouter);

server.listen(port, () => {
    console.log('JSON Server is running on ', port);
});