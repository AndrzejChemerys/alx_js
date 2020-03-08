import React, { Component } from 'react';

class EditContacts extends Component {

    dane = JSON.parse(localStorage.getItem("Phonebook"));
    id = this.props.match.params.id;

    state = {
        imie : this.dane[this.id].imie,
        nazwisko : this.dane[this.id].nazwisko,
        email : this.dane[this.id].email,
        telefon : this.dane[this.id].telefon,
    }

    editContact = () => {
        let newContact = {
            imie : this.state.imie,
            nazwisko : this.state.nazwisko,
            email : this.state.email,
            telefon : this.state.telefon
        }

        this.dane[this.id] = newContact;
        localStorage.setItem("Phonebook", JSON.stringify(this.dane))
    }

    cancel = () => {
        this.setState({redirect : true})
    }

    //modyfikacja pola ktore bylo zablokowane
    valueChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    render() {



        return(
            <div>
            <p>
                Imię:<br/>
                <input type="text" name="imie" value={this.state.imie} onChange={this.valueChange}/>
            </p>
            <p>
                Nazwisko:<br/>
                <input type="text" name="nazwisko" value={this.state.nazwisko} onChange={this.valueChange}/>
            </p>
            <p>
                Email:<br/>
                <input type="text" name="email" value={this.state.email} onChange={this.valueChange}/>
            </p>
            <p>
                Telefon:<br/>
                <input type="text" name="telefon" value={this.state.telefon} onChange={this.valueChange}/>
            </p>
            <p>
                <button onClick={this.addContact}>Zapisz nowe dane</button>
                <button onClick={this.cancel}>Anuluj</button>
            </p>
        </div>
        );
    }
}

export default EditContacts;