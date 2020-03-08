import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class ListContacts extends Component {

    state = {
        dane : JSON.parse(localStorage.getItem("Phonebook"))
    }

    render() {

        return(
            <table border='1'>
                <tr>
                    <th>
                        Imie
                    </th>
                    <th>
                        Nazwisko
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Telefon
                    </th>
                </tr>
                {this.state.dane != null ? this.state.dane.map((value, key) => 
                    <tr>
                        <td>{value.imie}</td>
                        <td>{value.nazwisko}</td>
                        <td>{value.email}</td>
                        <td>{value.telefon}</td>
                        <td><Link to = {`/del/${key}`}>Usuń</Link></td>
                    </tr>
                
                ) : <tr><td colspan="4"></td></tr> } 
            </table>
        );
    }
}

export default ListContacts;