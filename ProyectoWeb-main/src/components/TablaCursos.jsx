import React, { Component } from 'react'
import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from "@react-firebase/database";
import { firebaseConfig } from "../firebase";
import ListaCursos from './ListaCursos'

class TablaGastos extends Component {
    render() {
        return (
            <div className="row justify-content-center">
            <div className="form-group col-md-6">
                <table className="table">
                    <thead>
                        <tr>
                            <th>NRC</th>
                            <th>Nombre EE</th>
                            <th>Lunes</th>
                            <th>Martes</th>
                            <th>Miercoles</th>
                            <th>Jueves</th>
                            <th>Viernes</th>
                            <th>Profesor</th>
                            <th>Edificio</th>
                           
                        </tr>
                    </thead>                                                        
                    <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
                        <FirebaseDatabaseNode path="Cursos/" limitToFirst={100}>
                            {(data) => {
                                const { value } = data;
                                if (value === null || typeof value === "undefined") return null;                                
                                const values = Object.values(value);
                                return <ListaCursos items={values} />
                            }}
                        </FirebaseDatabaseNode>
                    </FirebaseDatabaseProvider>
                </table>
            </div>
            </div>
        )
    }
}

export default TablaGastos;