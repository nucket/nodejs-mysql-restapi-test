import { pool } from '../db.js'


export const getRooms = async (req, res) => {

    try {
        const [ rows ] = await pool.query('SELECT * FROM rooms')
        res.json( rows )
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
} 

export const getRoom = async ( req, res ) => {

    try {
        // throw new Error('Error test')
        const [ rows ] = await pool.query( 'SELECT * FROM rooms WHERE id = ?', [req.params.id] )
        if (rows.length <= 0) return res.status(404).json ({
            message: 'Room not found'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const creatingRooms = async (req, res) => {
    const { name, valor1 } = req.body
    
    try {
        const [ rows ] = await pool.query('INSERT INTO rooms (name, valor1) VALUES (?, ?)', [name, valor1])
        res.send({ 
            is: rows.insertId,
            name,
            valor1,
        })
    } catch (error) {
        return res.status (500).json ({
            message: 'Something goes wrong'
        })
    }
}

export const deletingRooms = async (req, res) => {

    try {
        const [result] = await pool.query('DELETE FROM rooms WHERE id = ?', [req.params.id] )
    
        if (result.affectedRows <= 0) return res.status (404).json({
            message: 'Room not found'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }

}


export const updatingRooms = async (req, res) => {
    const { id } = req.params
    const { name, valor1 } = req.body 

    try {

        const [result] =  await pool.query('UPDATE rooms SET name = IFNULL(?, name ), valor1 = IFNULL(?, valor1) WHERE id = ?', [name, valor1, id])
        
        if (result.affectedRows === 0 ) return res.status(404).json({

            message:'Room not found'

        }) 

        const [rows] = await pool.query('SELECT * FROM rooms WHERE id = ?', [id])

        console.log(rows)

        res.json('received')
    } catch (error) {
        return res.status (500).json({
            message: 'Something goes wrong'
        })
    }
}