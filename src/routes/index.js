const express = require('express');
const router = express.Router();

// Ruta base para pruebas
router.get('/', (req, res) => {
  res.json({ message: 'Hello from IgniteTech AI Challenge!' });
});

module.exports = router;
