import express from 'express';
import v1roomsRoutes from './v1/routes/rooms.routes.js';
import v1indexRoutes from './v1/routes/index.routes.js';

// preview v2 unchanged compared to version 1 [ 28-08-2023 ]
// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><
import v2roomsRoutes from './v2/routes/rooms.routes.js';
import v2indexRoutes from './v2/routes/index.routes.js';
// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

const app = express ()

app.use( express.json() )

app.use ( v1indexRoutes )
app.use ( '/api/v1', v1roomsRoutes )

// preview v2 unchanged compared to version 1 [ 28-08-2023 ]
// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><
app.use ( v2indexRoutes )
app.use ( '/api/v2', v2roomsRoutes )
// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><


app.use((req, res, next) => {

    res.status(404).json({
        message: 'Endpoint not found'
    })
})

export default app;

