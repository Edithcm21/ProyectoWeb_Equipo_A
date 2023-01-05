import * as React from "react";
import { Component } from "react";
import { FirebaseDatabaseMutation } from "@react-firebase/database";
import firebase from "firebase/app";
import "firebase/database";
import { FirebaseDatabaseProvider } from "@react-firebase/database";

import { firebaseConfig } from "../firebase";

class NuevoCurso extends Component {
  
   

  render() {
    return (
      
      <>
    
        <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
          <FirebaseDatabaseMutation type="push" path="Cursos">
            {({ runMutation }) => {
              return (
                <div className="row justify-content-center">
                    <div className="col-xs-3 col-md-3 col-sm-12">
                      <input
                        type="button"
                        Style="width:100%"
                        value="Guardar Datos"
                        className="mt-3 btn btn-outline-primary"
                        onClick={async () => {
                          await runMutation({
                            nrc:this.props.nrc,
                            edificio:this.props.edificio,
                            nombreee:this.props.nombreee,
                            profesor:this.props.profesor,
                            lunes:this.props.lunes,
                            martes:this.props.martes,
                            miercoles:this.props.miercoles,
                            jueves:this.props.jueves,
                            viernes:this.props.viernes

                          });
                          console.log("Entro aqui ");
                          
                        }}
                      />
                    </div>
                    <div className="col-xs-3 col-md-3 col-sm-12">
                      <input
                        type="button"
                        Style="width:100%"
                        value="Limpiar "
                        className="mt-3 btn btn-outline-success"
                        onClick={this.props.clean}
                      />
                    </div>

                </div>
              );
            }}
          </FirebaseDatabaseMutation>
        </FirebaseDatabaseProvider>

        

      </>
    );
  }
}

export default NuevoCurso;
