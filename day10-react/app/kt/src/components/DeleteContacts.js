import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

class DeleteContacts extends Component {

    state = {
        dane : JSON.parse(localStorage.getItem("Phonebook")),
        id : this.props.match.params.id,
        redirect : false
    }

    delContact = () => {
        this.state.dane.splice(this.state.id, 1);
        localStorage.setItem("Phonebook", JSON.stringify(this.state.dane));
        this.setState({redirect : true})

    }

    cancel = () => {
        this.setState({redirect : true})       
    }

    render() {
        
        if(this.state.redirect === true) {
            return <Redirect to="/" />
        }


        return(
            <div>
                <p>Czy napewno chcesz usunąć poniższy kontakt?</p>
                <p>Imię:{this.state.dane[this.state.id].imie}</p>
                <p>Nazwisko:{this.state.dane[this.state.id].nazwisko}</p>
                <p>
                    <button onClick={this.delContact}>Yes</button>
                    <button onClick={this.cancel}>No</button>
                </p>
            </div>
        );
    }
}

export default DeleteContacts;