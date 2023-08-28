import express from 'express';
import roomsRoutes from './routes/rooms.routes.js';
import indexRoutes from './routes/index.routes.js';

import { PORT } from './config.js'

const app = express ()

app.use( express.json() )

app.use ( indexRoutes )
app.use ( '/api', roomsRoutes )

app.use((req, res, next) => {

    res.status(404).json({
        message: 'Endpoint not found'
    })
})

export default app;