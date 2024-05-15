const express = require("express");
const mysql = require("mysql2/promise"); // Import mysql2/promise for promise-based queries
const bodyParser = require("body-parser");
var cors = require('cors')


const app = express();
const port = 3001;
app.use(cors())


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  next();
});

// MySQL database connection configuration
const usdt3 = mysql.createPool({
  host: "217.196.50.153", // Use the MySQL server hostname or IP address
  user: "admin3", // Your MySQL username
  password: "admin3",
  database: "usdt3", // Your MySQL database name
});
const usdt1 = mysql.createPool({
  host: "217.196.50.153", // Use the MySQL server hostname or IP address
  user: "admin3", // Your MySQL username
  password: "admin3", // Your MySQL password
  database: "usdt1", // Your MySQL database name
});

// Connect to MySQL database

usdt1.getConnection((err, connection) => {
  if (err) {
    console.error(" Error connecting to MySQL:", err);
    process.exit(1); // Exit the application if the connection fails
  }
  console.log("Connected to MySQL database");
  connection.release(); // Release the connection after successful connection
});

// Middleware to parse JSON requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));



app.use(express.json());



// Route to display information from the database based on form type
// app.post('/saveData', async (req, res) => {
//   try {
//       const { formData } = req.body;
      
      
//       // Destructure formData fields
//       const {
//           formtype
//       } = formData;

//       const {
//         name,
//         country,
//         email,
//         wallet,
//         paymentAmount,
//         Logros,
//         Concretados_fase_1,
//         fase_1,
//         Concretados,
//         fase_2,
//         Concretados_fase_2,
//         por_llamar1,
//         er_llamado1,
//         por_llamar2,
//         llamado_2do,
//         Total_Administrativo,
//         Pendientes,
//         Salidas,
//         Ingresos,
//         zona_1,
//         zona_2,
//         total_zona_1,
//         total_zona_2,
//         Contratacion_1,
//         Contratacion_2,
//         Conflictos_1,
//         Conflictos_2,
//         Capacitacion_1,
//         Capacitacion_2,
//         Mayorista_1,
//         Mayorista_2,
//         Minorista_1,
//         Minorista_2,
//         Comisionista_1,
//         Comisionista_2,
//         Dist_Zona_1,
//         Dist_Zona_2,
//         Enlace_1,
//         Enlace_2,
//         prod_er_Nivel1,
//         prod_do_Nivel2,
//         Pronóstico_1,
//         Pronóstico_2,
//         Adquisición_Productos_1,
//         Adquisición_Productos_2,
//         Inventario_1,
//         Inventario_2,
//         Almacenamiento_1,
//         Almacenamiento_2,
//         Conservación_y_preservación_de_los_productos_1,
//         Conservación_y_preservación_de_los_productos_2,
//         Picking_productos_1,
//         Picking_productos_2
//     } = req.body.formData;
//     const {
//       Metas_alcanzar_org1,
//       Seleccionar1_org1,
//       Seleccionar2_org1,
//       Seleccionar3_org1,
//       Seleccionar4_org1,
//       Imposiciones_org1,
//       Metas_alcanzar_org2,
//       Seleccionar1_org2,
//       Seleccionar2_org2,
//       Seleccionar3_org2,
//       Seleccionar4_org2,
//       Imposiciones_org2,
//       Metas_alcanzar_org3,
//       Seleccionar1_org3,
//       Seleccionar2_org3,
//       Seleccionar3_org3,
//       Seleccionar4_org3,
//       Imposiciones_org3,
//       Metas_alcanzar_org4,
//       Seleccionar1_org4,
//       Seleccionar2_org4,
//       Seleccionar3_org4,
//       Seleccionar4_org4,
//       Imposiciones_org4,
//       Control_de_Gestión,
//       ControlGestión1,
//       ControlGestión2,
//       ControlGestión3,
//       ControlGestión4,
//       Asistencia_a_la_dirección,
//       Estructura_contable,
//       selection_Estructura_1,
//       selection_Estructura_2,
//       selection_Estructura_3,
//       selection_Estructura_4,
//       Coordinación_y_optimización,
//       transacciones_Seleccionar,
//       Servicio_al_Cliente_1,
//       Servicio_al_Cliente_2,
//       Servicio_al_Cliente_3,
//       Servicio_al_Cliente_4,
//       Servicio_al_Cliente_5,
//       Servicio_al_Cliente_6,
//       problemas_resueltos_Seleccionar,
//       Reuniones_con_zonas_Seleccionar,
//       Dirección_Generalestrategias_1,
//       Dirección_Generalestrategias_2,
//       Dirección_Generalestrategias_3,
//       Dirección_Generalestrategias_4,
//       Dirección_Generalestrategias_5,
//       Dirección_Generalestrategias_6,
//       politicas_nuevas_Seleccionar
//   } = req.body.mgmtData;
//         // Execute queries for   1
//         // Insert formData fields into the formdata table for  formtype 1

// console.log(formData);
//       if ( formtype == "form1") {
        
//         await usdt1.query(
//           "INSERT INTO formdata " +
//           "(name, country, email, wallet, paymentAmount, Logros, Concretados_fase_1, fase_1, Concretados, fase_2, Concretados_fase_2, " +
//           "por_llamar1, er_llamado1, por_llamar2, llamado_2do, Total_Administrativo, Pendientes, Salidas, Ingresos, zona_1, zona_2, total_zona_1, total_zona_2, " +
//           "Contratacion_1, Contratacion_2, Conflictos_1, Conflictos_2, Capacitacion_1, Capacitacion_2, Mayorista_1, Mayorista_2, Minorista_1, Minorista_2, " +
//           "Comisionista_1, Comisionista_2, Dist_Zona_1, Dist_Zona_2, Enlace_1, Enlace_2, prod_er_Nivel1, prod_do_Nivel2, Pronóstico_1, Pronóstico_2, " +
//           "Adquisición_Productos_1, Adquisición_Productos_2, Inventario_1, Inventario_2, Almacenamiento_1, Almacenamiento_2, Conservación_y_preservación_de_los_productos_1, " +
//           "Conservación_y_preservación_de_los_productos_2, Picking_productos_1, Picking_productos_2) " +
//           "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?, ?)",
//           [name, country, email, wallet, paymentAmount, Logros, Concretados_fase_1, fase_1, Concretados, fase_2, Concretados_fase_2,
//           por_llamar1, er_llamado1, por_llamar2, llamado_2do, Total_Administrativo, Pendientes, Salidas, Ingresos, zona_1, zona_2, total_zona_1, total_zona_2,
//           Contratacion_1, Contratacion_2, Conflictos_1, Conflictos_2, Capacitacion_1, Capacitacion_2, Mayorista_1, Mayorista_2, Minorista_1, Minorista_2,
//           Comisionista_1, Comisionista_2, Dist_Zona_1, Dist_Zona_2, Enlace_1, Enlace_2, prod_er_Nivel1, prod_do_Nivel2, Pronóstico_1, Pronóstico_2,
//           Adquisición_Productos_1, Adquisición_Productos_2, Inventario_1, Inventario_2, Almacenamiento_1, Almacenamiento_2, Conservación_y_preservación_de_los_productos_1,
//           Conservación_y_preservación_de_los_productos_2, Picking_productos_1, Picking_productos_2]
//       );
//           // Insert mgmtData fields into the managementdata table for  formtype 1
//             await usdt1.query(
//             "INSERT INTO managementdata " +
//             "(Metas_alcanzar_org1, Seleccionar1_org1, Seleccionar2_org1, Seleccionar3_org1, Seleccionar4_org1, Imposiciones_org1, " +
//             "Metas_alcanzar_org2, Seleccionar1_org2, Seleccionar2_org2, Seleccionar3_org2, Seleccionar4_org2, Imposiciones_org2, " +
//             "Metas_alcanzar_org3, Seleccionar1_org3, Seleccionar2_org3, Seleccionar3_org3, Seleccionar4_org3, Imposiciones_org3, " +
//             "Metas_alcanzar_org4, Seleccionar1_org4, Seleccionar2_org4, Seleccionar3_org4, Seleccionar4_org4, Imposiciones_org4, " +
//             "Control_de_Gestión, ControlGestión1, ControlGestión2, ControlGestión3, ControlGestión4, Asistencia_a_la_dirección, " +
//             "Estructura_contable, selection_Estructura_1, selection_Estructura_2, selection_Estructura_3, selection_Estructura_4, " +
//             "Coordinación_y_optimización, transacciones_Seleccionar, Servicio_al_Cliente_1, Servicio_al_Cliente_2, Servicio_al_Cliente_3, " +
//             "Servicio_al_Cliente_4, Servicio_al_Cliente_5, Servicio_al_Cliente_6, problemas_resueltos_Seleccionar, Reuniones_con_zonas_Seleccionar, " +
//             "Dirección_Generalestrategias_1, Dirección_Generalestrategias_2, Dirección_Generalestrategias_3, Dirección_Generalestrategias_4, " +
//             "Dirección_Generalestrategias_5, Dirección_Generalestrategias_6, politicas_nuevas_Seleccionar) " +
//             "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
//             [Metas_alcanzar_org1, Seleccionar1_org1, Seleccionar2_org1, Seleccionar3_org1, Seleccionar4_org1, Imposiciones_org1,
//             Metas_alcanzar_org2, Seleccionar1_org2, Seleccionar2_org2, Seleccionar3_org2, Seleccionar4_org2, Imposiciones_org2,
//             Metas_alcanzar_org3, Seleccionar1_org3, Seleccionar2_org3, Seleccionar3_org3, Seleccionar4_org3, Imposiciones_org3,
//             Metas_alcanzar_org4, Seleccionar1_org4, Seleccionar2_org4, Seleccionar3_org4, Seleccionar4_org4, Imposiciones_org4,
//             Control_de_Gestión, ControlGestión1, ControlGestión2, ControlGestión3, ControlGestión4, Asistencia_a_la_dirección,
//             Estructura_contable, selection_Estructura_1, selection_Estructura_2, selection_Estructura_3, selection_Estructura_4,
//             Coordinación_y_optimización, transacciones_Seleccionar, Servicio_al_Cliente_1, Servicio_al_Cliente_2, Servicio_al_Cliente_3,
//             Servicio_al_Cliente_4, Servicio_al_Cliente_5, Servicio_al_Cliente_6, problemas_resueltos_Seleccionar, Reuniones_con_zonas_Seleccionar,
//             Dirección_Generalestrategias_1, Dirección_Generalestrategias_2, Dirección_Generalestrategias_3, Dirección_Generalestrategias_4,
//             Dirección_Generalestrategias_5, Dirección_Generalestrategias_6, politicas_nuevas_Seleccionar]
//         );
//       } else if ( formtype == "form3") {
//           // Execute queries for  formtype 3
//         // Execute queries for formType 3
//             // Insert formData fields into the formdata table for formType 3
//             await usdt3.query(
//               "INSERT INTO formdata " +
//               "(name, country, email, wallet, paymentAmount, Logros, Concretados_fase_1, fase_1, Concretados, fase_2, Concretados_fase_2, " +
//               "por_llamar1, er_llamado1, por_llamar2, llamado_2do, Total_Administrativo, Pendientes, Salidas, Ingresos, zona_1, zona_2, total_zona_1, total_zona_2, " +
//               "Contratacion_1, Contratacion_2, Conflictos_1, Conflictos_2, Capacitacion_1, Capacitacion_2, Mayorista_1, Mayorista_2, Minorista_1, Minorista_2, " +
//               "Comisionista_1, Comisionista_2, Dist_Zona_1, Dist_Zona_2, Enlace_1, Enlace_2, prod_er_Nivel1, prod_do_Nivel2, Pronóstico_1, Pronóstico_2, " +
//               "Adquisición_Productos_1, Adquisición_Productos_2, Inventario_1, Inventario_2, Almacenamiento_1, Almacenamiento_2, Conservación_y_preservación_de_los_productos_1, " +
//               "Conservación_y_preservación_de_los_productos_2, Picking_productos_1, Picking_productos_2) " +
//               "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?, ?)",
//               [name, country, email, wallet, paymentAmount, Logros, Concretados_fase_1, fase_1, Concretados, fase_2, Concretados_fase_2,
//               por_llamar1, er_llamado1, por_llamar2, llamado_2do, Total_Administrativo, Pendientes, Salidas, Ingresos, zona_1, zona_2, total_zona_1, total_zona_2,
//               Contratacion_1, Contratacion_2, Conflictos_1, Conflictos_2, Capacitacion_1, Capacitacion_2, Mayorista_1, Mayorista_2, Minorista_1, Minorista_2,
//               Comisionista_1, Comisionista_2, Dist_Zona_1, Dist_Zona_2, Enlace_1, Enlace_2, prod_er_Nivel1, prod_do_Nivel2, Pronóstico_1, Pronóstico_2,
//               Adquisición_Productos_1, Adquisición_Productos_2, Inventario_1, Inventario_2, Almacenamiento_1, Almacenamiento_2, Conservación_y_preservación_de_los_productos_1,
//               Conservación_y_preservación_de_los_productos_2, Picking_productos_1, Picking_productos_2]
//           );
//               // Insert mgmtData fields into the managementdata table for  formtype 1
//                 await usdt3.query(
//                 "INSERT INTO managementdata " +
//                 "(Metas_alcanzar_org1, Seleccionar1_org1, Seleccionar2_org1, Seleccionar3_org1, Seleccionar4_org1, Imposiciones_org1, " +
//                 "Metas_alcanzar_org2, Seleccionar1_org2, Seleccionar2_org2, Seleccionar3_org2, Seleccionar4_org2, Imposiciones_org2, " +
//                 "Metas_alcanzar_org3, Seleccionar1_org3, Seleccionar2_org3, Seleccionar3_org3, Seleccionar4_org3, Imposiciones_org3, " +
//                 "Metas_alcanzar_org4, Seleccionar1_org4, Seleccionar2_org4, Seleccionar3_org4, Seleccionar4_org4, Imposiciones_org4, " +
//                 "Control_de_Gestión, ControlGestión1, ControlGestión2, ControlGestión3, ControlGestión4, Asistencia_a_la_dirección, " +
//                 "Estructura_contable, selection_Estructura_1, selection_Estructura_2, selection_Estructura_3, selection_Estructura_4, " +
//                 "Coordinación_y_optimización, transacciones_Seleccionar, Servicio_al_Cliente_1, Servicio_al_Cliente_2, Servicio_al_Cliente_3, " +
//                 "Servicio_al_Cliente_4, Servicio_al_Cliente_5, Servicio_al_Cliente_6, problemas_resueltos_Seleccionar, Reuniones_con_zonas_Seleccionar, " +
//                 "Dirección_Generalestrategias_1, Dirección_Generalestrategias_2, Dirección_Generalestrategias_3, Dirección_Generalestrategias_4, " +
//                 "Dirección_Generalestrategias_5, Dirección_Generalestrategias_6, politicas_nuevas_Seleccionar) " +
//                 "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
//                 [Metas_alcanzar_org1, Seleccionar1_org1, Seleccionar2_org1, Seleccionar3_org1, Seleccionar4_org1, Imposiciones_org1,
//                 Metas_alcanzar_org2, Seleccionar1_org2, Seleccionar2_org2, Seleccionar3_org2, Seleccionar4_org2, Imposiciones_org2,
//                 Metas_alcanzar_org3, Seleccionar1_org3, Seleccionar2_org3, Seleccionar3_org3, Seleccionar4_org3, Imposiciones_org3,
//                 Metas_alcanzar_org4, Seleccionar1_org4, Seleccionar2_org4, Seleccionar3_org4, Seleccionar4_org4, Imposiciones_org4,
//                 Control_de_Gestión, ControlGestión1, ControlGestión2, ControlGestión3, ControlGestión4, Asistencia_a_la_dirección,
//                 Estructura_contable, selection_Estructura_1, selection_Estructura_2, selection_Estructura_3, selection_Estructura_4,
//                 Coordinación_y_optimización, transacciones_Seleccionar, Servicio_al_Cliente_1, Servicio_al_Cliente_2, Servicio_al_Cliente_3,
//                 Servicio_al_Cliente_4, Servicio_al_Cliente_5, Servicio_al_Cliente_6, problemas_resueltos_Seleccionar, Reuniones_con_zonas_Seleccionar,
//                 Dirección_Generalestrategias_1, Dirección_Generalestrategias_2, Dirección_Generalestrategias_3, Dirección_Generalestrategias_4,
//                 Dirección_Generalestrategias_5, Dirección_Generalestrategias_6, politicas_nuevas_Seleccionar]
//             );
//       } else {
//           // Handle other form types
//           throw new Error('Unsupported formType');
//       }

//       console.log('Data inserted into both tables successfully');
//       res.status(200).json({ message: 'Data saved successfully' });
//   } catch (error) {
//       console.error('Error saving data:', error);
//       res.status(500).json({ error: 'Error saving data' });
//   }
// });

app.post('/saveData', async (req, res) => {
  try {
    const { formData } = req.body;

    // Destructure formData fields
    const {
      formtype,
      name,
      country,
      email,
      wallet,
      paymentAmount,
      ...dataFields // All other fields are data01 to data99
    } = formData;

    // Combine all fields from formData
    const allFields = { formtype, name, country, email, wallet, paymentAmount, ...dataFields };

    // Execute query based on formtype
    if (formtype === 'form1') {
      await usdt1.query(
        `INSERT INTO form_data (${Object.keys(allFields).join(', ')}) VALUES (${Array(Object.keys(allFields).length).fill('?').join(', ')})`,
        Object.values(allFields)
      );
    } else if (formtype === 'form3') {
      await usdt3.query(
        `INSERT INTO form_data (${Object.keys(allFields).join(', ')}) VALUES (${Array(Object.keys(allFields).length).fill('?').join(', ')})`,
        Object.values(allFields)
      );
    } else {
      throw new Error('Unsupported formType');
    }

    console.log('Data inserted into table successfully');
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
    let connection;
    if (formType === "1") {
      sql =
        "SELECT name, country,points,position wallet, paymentAmount FROM usdt1.form_data ";
      connection = usdt1;
    } else if (formType === "3") {
      sql =
        "SELECT name, country,points,position wallet, paymentAmount FROM usdt3.form_data";
      connection = usdt3;
    } else {
      throw new Error("Invalid form type");
    }

    const [results] = await connection.query(sql);
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


