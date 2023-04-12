const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const userRouter = require("./user.route");
const reportRouter = require("./report.route");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/report', reportRouter);

module.exports = router;