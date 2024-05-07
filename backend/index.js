const express = require("express");
const mysql = require("mysql2/promise"); // Import mysql2/promise for promise-based queries
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

// MySQL database connection configuration
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "asad1234",
  database: "user",
});

// Connect to MySQL database
db.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    process.exit(1); // Exit the application if the connection fails
  }
  console.log("Connected to MySQL database");
  connection.release(); // Release the connection after successful connection
});

// Middleware to parse JSON requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());



// Route to display information from the database based on form type
app.post('/saveData', async (req, res) => {
    try {
        // Destructure formData fields
        const {
            name,
            country,
            city,
            email,
            wallet,
            formtype,
            paymentAmount,
            Logros,
            Concretados_fase_1,
            fase_1,
            Concretados,
            fase_2,
            Concretados_fase_2,
            por_llamar1,
            er_llamado1,
            por_llamar2,
            llamado_2do,
            Total_Administrativo,
            Pendientes,
            Salidas,
            Ingresos,
            zona_1,
            zona_2,
            total_zona_1,
            total_zona_2,
            Contratacion_1,
            Contratacion_2,
            Conflictos_1,
            Conflictos_2,
            Capacitacion_1,
            Capacitacion_2,
            Mayorista_1,
            Mayorista_2,
            Minorista_1,
            Minorista_2,
            Comisionista_1,
            Comisionista_2,
            Dist_Zona_1,
            Dist_Zona_2,
            Enlace_1,
            Enlace_2,
            prod_er_Nivel1,
            prod_do_Nivel2,
            Pronóstico_1,
            Pronóstico_2,
            Adquisición_Productos_1,
            Adquisición_Productos_2,
            Inventario_1,
            Inventario_2,
            Almacenamiento_1,
            Almacenamiento_2,
            Conservación_y_preservación_de_los_productos_1,
            Conservación_y_preservación_de_los_productos_2,
            Picking_productos_1,
            Picking_productos_2
        } = req.body.formData;

        // Insert formData fields into the formdata table
        await db.query(
            "INSERT INTO formdata " +
            "(name, country, city, email, wallet, formtype, paymentAmount, Logros, Concretados_fase_1, fase_1, Concretados, fase_2, Concretados_fase_2, " +
            "por_llamar1, er_llamado1, por_llamar2, llamado_2do, Total_Administrativo, Pendientes, Salidas, Ingresos, zona_1, zona_2, total_zona_1, total_zona_2, " +
            "Contratacion_1, Contratacion_2, Conflictos_1, Conflictos_2, Capacitacion_1, Capacitacion_2, Mayorista_1, Mayorista_2, Minorista_1, Minorista_2, " +
            "Comisionista_1, Comisionista_2, Dist_Zona_1, Dist_Zona_2, Enlace_1, Enlace_2, prod_er_Nivel1, prod_do_Nivel2, Pronóstico_1, Pronóstico_2, " +
            "Adquisición_Productos_1, Adquisición_Productos_2, Inventario_1, Inventario_2, Almacenamiento_1, Almacenamiento_2, Conservación_y_preservación_de_los_productos_1, " +
            "Conservación_y_preservación_de_los_productos_2, Picking_productos_1, Picking_productos_2) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [name, country, city, email, wallet, formtype, paymentAmount, Logros, Concretados_fase_1, fase_1, Concretados, fase_2, Concretados_fase_2,
            por_llamar1, er_llamado1, por_llamar2, llamado_2do, Total_Administrativo, Pendientes, Salidas, Ingresos, zona_1, zona_2, total_zona_1, total_zona_2,
            Contratacion_1, Contratacion_2, Conflictos_1, Conflictos_2, Capacitacion_1, Capacitacion_2, Mayorista_1, Mayorista_2, Minorista_1, Minorista_2,
            Comisionista_1, Comisionista_2, Dist_Zona_1, Dist_Zona_2, Enlace_1, Enlace_2, prod_er_Nivel1, prod_do_Nivel2, Pronóstico_1, Pronóstico_2,
            Adquisición_Productos_1, Adquisición_Productos_2, Inventario_1, Inventario_2, Almacenamiento_1, Almacenamiento_2, Conservación_y_preservación_de_los_productos_1,
            Conservación_y_preservación_de_los_productos_2, Picking_productos_1, Picking_productos_2]
        );
        
        // Destructure mgmtData fields
        // Destructure mgmtData fields
        const {
            Metas_alcanzar_org1,
            Seleccionar1_org1,
            Seleccionar2_org1,
            Seleccionar3_org1,
            Seleccionar4_org1,
            Imposiciones_org1,
            Metas_alcanzar_org2,
            Seleccionar1_org2,
            Seleccionar2_org2,
            Seleccionar3_org2,
            Seleccionar4_org2,
            Imposiciones_org2,
            Metas_alcanzar_org3,
            Seleccionar1_org3,
            Seleccionar2_org3,
            Seleccionar3_org3,
            Seleccionar4_org3,
            Imposiciones_org3,
            Metas_alcanzar_org4,
            Seleccionar1_org4,
            Seleccionar2_org4,
            Seleccionar3_org4,
            Seleccionar4_org4,
            Imposiciones_org4,
            Control_de_Gestión,
            ControlGestión1,
            ControlGestión2,
            ControlGestión3,
            ControlGestión4,
            Asistencia_a_la_dirección,
            Estructura_contable,
            selection_Estructura_1,
            selection_Estructura_2,
            selection_Estructura_3,
            selection_Estructura_4,
            Coordinación_y_optimización,
            transacciones_Seleccionar,
            Servicio_al_Cliente_1,
            Servicio_al_Cliente_2,
            Servicio_al_Cliente_3,
            Servicio_al_Cliente_4,
            Servicio_al_Cliente_5,
            Servicio_al_Cliente_6,
            problemas_resueltos_Seleccionar,
            Reuniones_con_zonas_Seleccionar,
            Dirección_Generalestrategias_1,
            Dirección_Generalestrategias_2,
            Dirección_Generalestrategias_3,
            Dirección_Generalestrategias_4,
            Dirección_Generalestrategias_5,
            Dirección_Generalestrategias_6,
            politicas_nuevas_Seleccionar
        } = req.body.mgmtData;

        // Insert mgmtData fields into the managementdata table
        await db.query(
            "INSERT INTO managementdata " +
            "(Metas_alcanzar_org1, Seleccionar1_org1, Seleccionar2_org1, Seleccionar3_org1, Seleccionar4_org1, Imposiciones_org1, " +
            "Metas_alcanzar_org2, Seleccionar1_org2, Seleccionar2_org2, Seleccionar3_org2, Seleccionar4_org2, Imposiciones_org2, " +
            "Metas_alcanzar_org3, Seleccionar1_org3, Seleccionar2_org3, Seleccionar3_org3, Seleccionar4_org3, Imposiciones_org3, " +
            "Metas_alcanzar_org4, Seleccionar1_org4, Seleccionar2_org4, Seleccionar3_org4, Seleccionar4_org4, Imposiciones_org4, " +
            "Control_de_Gestión, ControlGestión1, ControlGestión2, ControlGestión3, ControlGestión4, Asistencia_a_la_dirección, " +
            "Estructura_contable, selection_Estructura_1, selection_Estructura_2, selection_Estructura_3, selection_Estructura_4, " +
            "Coordinación_y_optimización, transacciones_Seleccionar, Servicio_al_Cliente_1, Servicio_al_Cliente_2, Servicio_al_Cliente_3, " +
            "Servicio_al_Cliente_4, Servicio_al_Cliente_5, Servicio_al_Cliente_6, problemas_resueltos_Seleccionar, Reuniones_con_zonas_Seleccionar, " +
            "Dirección_Generalestrategias_1, Dirección_Generalestrategias_2, Dirección_Generalestrategias_3, Dirección_Generalestrategias_4, " +
            "Dirección_Generalestrategias_5, Dirección_Generalestrategias_6, politicas_nuevas_Seleccionar) " +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [Metas_alcanzar_org1, Seleccionar1_org1, Seleccionar2_org1, Seleccionar3_org1, Seleccionar4_org1, Imposiciones_org1,
            Metas_alcanzar_org2, Seleccionar1_org2, Seleccionar2_org2, Seleccionar3_org2, Seleccionar4_org2, Imposiciones_org2,
            Metas_alcanzar_org3, Seleccionar1_org3, Seleccionar2_org3, Seleccionar3_org3, Seleccionar4_org3, Imposiciones_org3,
            Metas_alcanzar_org4, Seleccionar1_org4, Seleccionar2_org4, Seleccionar3_org4, Seleccionar4_org4, Imposiciones_org4,
            Control_de_Gestión, ControlGestión1, ControlGestión2, ControlGestión3, ControlGestión4, Asistencia_a_la_dirección,
            Estructura_contable, selection_Estructura_1, selection_Estructura_2, selection_Estructura_3, selection_Estructura_4,
            Coordinación_y_optimización, transacciones_Seleccionar, Servicio_al_Cliente_1, Servicio_al_Cliente_2, Servicio_al_Cliente_3,
            Servicio_al_Cliente_4, Servicio_al_Cliente_5, Servicio_al_Cliente_6, problemas_resueltos_Seleccionar, Reuniones_con_zonas_Seleccionar,
            Dirección_Generalestrategias_1, Dirección_Generalestrategias_2, Dirección_Generalestrategias_3, Dirección_Generalestrategias_4,
            Dirección_Generalestrategias_5, Dirección_Generalestrategias_6, politicas_nuevas_Seleccionar]
        );
        
        console.log('Data inserted into both tables successfully');
        res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Error saving data' });
    }
});


app.get("/tables", async (req, res) => {
    try {
      const formType = req.query.formType; // Extract formType from query parameters
  
      let sql;
      if (formType === "form1") {
        sql =
          "SELECT name, country, wallet, paymentAmount FROM formdata WHERE formtype ='form1' LIMIT 50";
      } else if (formType === "form2") {
        sql =
          "SELECT name, country, wallet, paymentAmount FROM formdata WHERE formtype ='form2' LIMIT 50";
      } else {
        throw new Error("Invalid form type");
      }
  
      const [results] = await db.query(sql);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.log(error);
    }
  });
  

// Route to display the port on which the server is running
app.get("/port", (req, res) => {
  res.status(200).json({ port });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "app is running" });
});

app.post('/create-columns', (req, res) => {
    // Get the payload from the request
    const payload = req.body;
  
    // Function to create columns dynamically based on payload keys
    function createColumns(payload) {
      let columnDefinitions = '';
      for (const key in payload) {
        if (payload.hasOwnProperty(key)) {
          columnDefinitions += `${key} VARCHAR(255),`;
        }
      }
      columnDefinitions = columnDefinitions.slice(0, -1); // Remove trailing comma
      const sql = `ALTER TABLE managementdata ADD COLUMN (${columnDefinitions})`;
      return sql;
    }
  
    // Get SQL query to create columns
    const createTableSQL = createColumns(payload);
  
    // Execute the query to alter the table structure
    db.query(createTableSQL, (error, results, fields) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Error creating columns' });
        return;
      }
      console.log('Table structure altered successfully');
      res.status(200).json({ message: 'Columns created successfully' });
    });
  });