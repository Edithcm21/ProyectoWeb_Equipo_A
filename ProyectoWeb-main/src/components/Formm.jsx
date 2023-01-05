import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from "@react-firebase/database";
import { firebaseConfig } from "../firebase";
import TablaCursos from "./TablaCursos";
import NuevoCurso from "./NuevoCurso";

class Formm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nrc:"",
      edificio:null,
      nombreee:"",
      lunes:"disponible",
      martes:"disponible",
      miercoles:"disponible",
      jueves:"disponible",
      viernes:"disponible",
      profesor:""
    };
    this.setEdificio = this.setEdificio.bind(this);
    console.log(this.state);
  }

  setNRC = (event) => {
    this.setState(
      { nrc: event.target.value },
      console.log(event.target.value)
    );
  };
 
  setNombree = (event) => {
    this.setState(
      { nombreee: event.target.value },
      console.log(event.target.value)
    );
  };
  setLunes = (event) => {
    this.setState(
      { lunes: event.target.value },
      console.log(event.target.value)
    );
  };

  setMartes = (event) => {
    this.setState(
      { martes: event.target.value },
      console.log(event.target.value)
    );
  };

  setMiercoles = (event) => {
    this.setState(
      { miercoles: event.target.value },
      console.log(event.target.value)
    );
  };
  setJueves = (event) => {
    this.setState(
      { jueves: event.target.value },
      console.log(event.target.value)
    );
  };
  setViernes = (event) => {
    this.setState(
      { viernes: event.target.value },
      console.log(event.target.value)
    );
  };
  setProfesor = (event) => {
    this.setState(
      { profesor: event.target.value },
      console.log(event.target.value)
    );
  };


  setEdificio = (selectedEdificio) => {
    this.setState({ edificio: selectedEdificio.target.value });
  };

  clean = () => {
    this.setState({
      nrc:"",
      edificio:"",
      nombreee:"",
      lunes:"",
      martes:"",
      miercoles:"",
      jueves:"",
      viernes:"",
      profesor:""
    })
  }

  render() {
    const { edificio,lunes,martes,miercoles,jueves,viernes, nombreee,nrc,profesor } = this.state;
    return (
      <div>
        <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
          <FirebaseDatabaseNode path="edificios/">
            {(data) => {
              const { value } = data;
              if (value === null || typeof value === "undefined") return null;
              const values = Object.values(value);
              return <div className="row justify-content-center">
                <div className="form-group col-md-6">
                  <label htmlFor="">Ingrese el tipo:</label>
                  <select
                    onChange={this.setEdificio}
                    value={edificio}
                    className="form-control"
                  >
                    <option value={edificio}>Seleccione un edificio</option>
                    {values.map((value) => {
                      return (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>;
            }}
          </FirebaseDatabaseNode>
        </FirebaseDatabaseProvider>
        <div className="row justify-content-center">
          <div className="form-group col-md-6">
            <label htmlFor="">Ingrese el NRC:</label>
            <input
              onChange={this.setNRC}
              type="text"
              maxLength={100}
              name="nrc"
              id="nrc"
              className="form-control"
              value={nrc}
            />
          </div>
        </div> 

        <div className="row justify-content-center">
          <div className="form-group col-md-6">
            <label htmlFor="">Ingrese Nombre de la EE:</label>
            <input
              onChange={this.setNombree}
              type="text"
              maxLength={100}
              name="nombre"
              id="nombre"
              className="form-control"
              value={nombreee}
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="form-group col-md-6">
            <label htmlFor="">Nombre del profesor:</label>
            <input
              onChange={this.setProfesor}
              type="text"
              maxLength={100}
              name="nombrep"
              id="nombrep"
              className="form-control"
              value={profesor}
            />
          </div>
        </div> 


        <div className="row justify-content-center">
          <div className="form-group col-md-6">
            <div className="row justify-content-center">
            <label htmlFor="">Ingrese El horario:</label>
            <div className="col-sm-4">
            <label >Lunes:</label>
            <input
              onChange={this.setLunes}
              type="text"
              name="lunes"
              id="lunes"
              className="form-control"
              value={lunes}
            />
            </div>
            <div className="col-sm-4">
            <label >Martes:</label>
            <input
              onChange={this.setMartes}
              type="text"
              name="martes"
              id="martes"
              className="form-control"
              value={martes}
            />
            </div>
            <div className="col-sm-4">
            <label>Miercoles:</label>
            <input
              onChange={this.setMiercoles}
              type="text"
              name="miercoles"
              id="miercoles"
              className="form-control"
              value={miercoles}
            />
            </div>
            </div>
            <div className="row justify-content-center">

            <div className="col-sm-6">
            <label>Jueves:</label>
            <input
              onChange={this.setJueves}
              type="text"
              name="jueves"
              id="jueves"
              className="form-control"
              value={jueves}
            />
            </div>

            <div className="col-sm-6">
            <label >Viernes:</label>
            <input
              onChange={this.setViernes}
              type="text"
              name="viernes"
              id="viernes"
              className="form-control"
              value={viernes}
            />
            </div>
            </div>
            
          </div>
        </div>
       
          <NuevoCurso nrc={nrc} nombreee={nombreee} lunes={lunes} martes={martes} miercoles={miercoles}
         jueves={jueves} viernes={viernes} edificio={edificio} profesor={profesor} clean={this.clean}/>
        <br />
        <TablaCursos />
      </div>
    );
    
  }
}

export default Formm;
