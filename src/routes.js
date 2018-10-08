// Dependencias
import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import * as routes from './constants/routesConstants';
import {firebase} from './firebase';

// Components
import App from './Components/App';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Muro from './Components/Muro';
import Page404 from './Components/Page404';


class AppRoutes extends Component {
  constructor(props){
    super(props)

    this.state = {
      authUser : null
    }
  }

  componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      });
    }

  render() {
    console.log(this.state);

      return (
        <App>
          <Switch>
            <Route exact path={routes.SIGN_IN} component={Login}/>
            <Route exact path={routes.SIGN_UP} component={SignUp}/>
            <Route exact path={routes.HOME} component={Muro}/>
            <Route component={Page404}/>
          </Switch>
        </App>)
    }
  }

export default AppRoutes;
