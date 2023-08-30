import { Router } from 'express'
import { creatingRooms, deletingRooms, getRooms, updatingRooms, getRoom } from '../../controllers/rooms.controllers.js';

const router = Router()

router.get('/rooms', getRooms );

router.get('/rooms/:id', getRoom );

router.post('/rooms', creatingRooms );

router.patch('/rooms/:id', updatingRooms);

router.delete('/rooms/:id', deletingRooms );


export default router


