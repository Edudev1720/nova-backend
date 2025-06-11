const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta para recibir datos del formulario
app.post('/formulario', (req, res) => {
  console.log('📩 Datos recibidos del formulario:', req.body);
  res.json({ mensaje: 'Formulario recibido con éxito 🚀' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Backend escuchando en http://localhost:${PORT}`);
});
