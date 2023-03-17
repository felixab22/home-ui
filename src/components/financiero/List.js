import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./../home/Navbar";
const List = () => {
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://www.agroayacucho.gob.pe:8086/planilla/07129318",
      headers: {
        "Content-Type": "application/json",
        /* "Authorization": `Bearer ${sessionStorage.getItem("token")}`,    */
        Accept: "application/json",
      },
      params: {
        search: "parameter",
      },
    })
      .then((response) => {
        setResponseData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid mt-3">
      <h3 className="text-center">LISTA DE BOLETAS</h3>
        <form className="d-flex mb-3" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="search">
            Buscar
          </button>
        </form>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="text-center">DNI</th>
                <th className="text-center">CARGO</th>
                <th className="text-center">FECHA</th>
                <th className="text-center">NÚMERO DE PLAZA</th>
                <th className="text-center">TIPO DE TRABAJADOR</th>
                <th className="text-center">MONTO REMUNERACIÓN</th>
                <th className="text-center">MONTO PRODUCTIVIDAD</th>
                <th className="text-center">ACCIÓN</th>
              </tr>
            </thead>
            <tbody>
              {responseData.map((value, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{value["Documento"]}</th>
                    <th scope="row">{value["Cargo"]}</th>
                    <td className="text-center">{value["Fecha"]}</td>
                    <td className="text-center">{value["NumeroPlaza"]}</td>
                    <td className="text-center">{value["TipoTrab"]}</td>
                    <td className="text-center">0</td>
                    <td className="text-center">0</td>
                    <td>
                      <a href="#" className="btn btn-outline-dark">
                        PDF
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default List;
