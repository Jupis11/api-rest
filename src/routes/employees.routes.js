import {Router}  from "express";

const router = Router()

router.get('/employees', (req, res) => res.send('obteniendo resultados'))
router.post('/employees', (req, res) => res.send('creando empleados'))
router.put('/employees', (req, res) => res.send('actualizando empleados'))
router.delete('/employees', (req, res) => res.send('eliminando empleados'))

export default router