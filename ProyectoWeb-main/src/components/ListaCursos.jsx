import React, { Component } from 'react';

class ListaCursos extends Component {
    render(){
        return(
            <tbody>
                {
                this.props.items.map((val) => {
                    const s = Object.values(val);                    
                    return(
                        <tr>
                            <td>{s[6]}</td>
                            <td>{s[5]}</td>
                            <td>{s[2]}</td>
                            <td>{s[3]}</td>
                            <td>{s[4]}</td>
                            <td>{s[1]}</td>
                            <td>{s[8]}</td>
                            <td>{s[7]}</td>
                            <td>{s[0]}</td>
                        </tr>
                    )
                })                   
                }
            </tbody>            
        )
    }
}

export default ListaCursos;