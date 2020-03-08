import React, { Component } from 'react'
import { BrowserRouter, Router, Switch, Link, Route } from "react-router-dom"; 
import AddContacts from "./components/AddContacts";
import ListContacts from "./components/ListContacts";
import DeleteContacts from './components/DeleteContacts';

class App extends Component {
  render() {
    return(
      <div>
        <h1>Książka Adresowa</h1>

        <BrowserRouter>
          <ul>
            <li>
              <Link to='/'>Lista kontaktów</Link> asdasd
            </li>
            <li>
              <Link to='/add'>Dodaj kontakt</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/add" component={AddContacts} />
            <Route exact path="/" component={ListContacts} />
            <Route path="/del/:id" component={DeleteContacts} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;

