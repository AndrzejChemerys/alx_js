import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

class AddContacts extends Component {

    state = {
        redirect : false
    }

    addContact = () => {
        let newContact = {
            imie : document.querySelector("input[name='name']").value,
            nazwisko : document.querySelector("input[name='surname']").value,
            email : document.querySelector("input[name='email']").value,
            telefon : document.querySelector("input[name='phone']").value,
        }
        let daneJSON = localStorage.getItem("Phonebook");
        if (daneJSON == null) {
            daneJSON = [];
        } else {
            daneJSON = JSON.parse(daneJSON);
        }

        daneJSON.push(newContact);
        localStorage.setItem("Phonebook", JSON.stringify(daneJSON));
        
        this.setState({redirect : true})
    }

    cancel = () => {
        this.setState({redirect : true})
    }

    render() {
        if(this.state.redirect === true){
            return <Redirect to="/" />
        }
        return(
            <div>
                <p>
                    Imię:<br/>
                    <input type="text" name="name"/>
                </p>
                <p>67uj
                    Nazwisko:<br/>
                    <input type="text" name="surname"/>
                </p>
                <p>
                    Email:<br/>
                    <input type="text" name="email"/>
                </p>
                <p>
                    Telefon:<br/>
                    <input type="text" name="phone"/>
                </p>
                <p>
                    <button onClick={this.addContact}>Zapisz nowe dane</button>
                    <button onClick={this.cancel}>Anuluj</button>
                </p>
            </div>
        );
    }
}

export default AddContacts;