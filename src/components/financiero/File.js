import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Navbar from "./../home/Navbar";
const File = () => {
  const formCSV = useRef(null);
  const { register, handleSubmit } = useForm();
  const formatDate = () =>
    `${new Date().getFullYear()}-${("0" + (new Date().getMonth() + 1)).slice(
      -2
    )}`;
  const defaultType = "nombrado";

  const handleOnClick = () => {
    let bodyFormData = new FormData();
    bodyFormData.append("fecha", selectDate);
    bodyFormData.append("tipo-trab", selectType);
    console.log(bodyFormData);
  };

  const onSubmit = async (data) => {
    const formData = new FormData(formCSV.current);
    formData.append("file", data.file[0]);

    const newDate = `${formData.get("fecha")}-01`;
    formData.delete("fecha");
    formData.append("fecha", newDate);

    console.log(data);
    console.log(formData);

    await axios
      .post("http://www.agroayacucho.gob.pe:8086/planilla/csv", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("success");
      })
      .catch((error) => {
        console.log(error);
        alert("error");
      });
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-3">
        <div className="row justify-content-lg-center">
          <div className="card col-lg-6 d-grid gap-3 pb-3">
            <h3 className="text-center">CARGAR BOLETAS</h3>
            <form ref={formCSV} onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="tipo-trab" className="col-sm col-form-label">
                  Seleccione tipo Trabajador
                </label>
                <select
                  id="tipo-trab"
                  name="tipo-trab"
                  defaultValue={defaultType}
                  className="form-select col-sm col-form-label"
                >
                  <option value="contratado">Contratado</option>
                  <option value="nombrado">Nombrado</option>
                </select>
              </div>
              <div>
                <label htmlFor="text" className="col-sm-2 col-form-label">
                  Fecha
                </label>
                <input
                  className="form-control"
                  name="fecha"
                  type="month"
                  defaultValue={formatDate()}
                  placeholder="Select date"
                />
              </div>
              <hr />
              <div>
                <input
                  type="file"
                  className="form-control mb-3"
                  id="archivo-csv"
                  {...register("file")}
                />
              </div>
              <div className="d-grid gap-2">
                <input
                  type="submit"
                  className="btn btn btn-success "
                  defaultValue="Enviar CSV"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default File;
