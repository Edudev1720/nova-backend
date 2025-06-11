const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta para recibir datos del formulario
const { createClient } = require('@supabase/supabase-js');

// URL y KEY de Supabase
const SUPABASE_URL = 'https://stxrhnyhaeqfuplguzye.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0eHJobnloYWVxZnVwbGd1enllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2Mzc2NDAsImV4cCI6MjA2NTIxMzY0MH0.dxnlDBJeQsij6pumpDE-6h4NzAHeF7u2bctunPe5ZNc';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

app.post('/formulario', async (req, res) => {
    console.log('📩 Datos recibidos del formulario:', req.body);
  
    const { name, email, interest, message } = req.body;
  
    const { data, error } = await supabase
      .from('formularios') // Nombre de la tabla en Supabase
      .insert([{ name, email, interest, message }]);
  
    if (error) {
      console.error("❌ Error al insertar en Supabase:", error);
      return res.status(500).json({ mensaje: 'Error al guardar en la base de datos' });
    }
  
    console.log("✅ Insertado en Supabase:", data);
    res.json({ mensaje: 'Formulario recibido y guardado con éxito 🚀' });
  });
  
  

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Backend escuchando en http://localhost:${PORT}`);
});
