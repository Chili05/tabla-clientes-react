import React from "react";
import "./App.css";
import clientes from "./clientes.json";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; 

function App() {
  const exportarPDF = () => {
    const doc = new jsPDF();
    doc.text("Lista de Clientes", 14, 15);

    const tableColumn = ["Cédula", "Nombre", "Correo", "Dirección", "Cargo"];
    const tableRows = clientes.map(cli => [
      cli.cedula,
      cli.nombre,
      cli.correo,
      cli.direccion,
      cli.cargo
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [74, 105, 189] }
    });

    doc.save("clientes.pdf");
  };

  return (
    <div className="App">
      <h1>Tabla de Clientes</h1>
      <button onClick={exportarPDF} className="boton-pdf">Descargar PDF</button>
      <table>
        <thead>
          <tr>
            <th>Cédula</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Dirección</th>
            <th>Cargo</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <tr key={index}>
              <td data-label="Cédula">{cliente.cedula}</td>
              <td data-label="Nombre">{cliente.nombre}</td>
              <td data-label="Correo">{cliente.correo}</td>
              <td data-label="Dirección">{cliente.direccion}</td>
              <td data-label="Cargo">{cliente.cargo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
