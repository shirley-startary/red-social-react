// Dependencias
import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import * as routes from './constants/routesConstants';
import {firebase} from './firebase';

// Components
import App from './Components/App';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Muro from './Components/Muro';
import Page404 from './Components/Page404';

const MyRoute = (props) => {
  console.log(props);
  return (props.authUser
    ? <Route {...props}/>
  : <Redirect to={routes.SIGN_IN} />)
}

class AppRoutes extends Component {
  constructor(props){
    super(props)

    this.state = {
      authUser : null,
      isAuthLoaded: false,
    }
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      this.setState({
        authUser,
        isAuthLoaded : true
      })
      // authUser
      //   ? this.setState({ authUser })
      //   : this.setState({ authUser: null });
    });
  }

  render() {
    console.log(this.state.authUser);
    if (!this.state.isAuthLoaded) {
      return (<div>Loading...</div>)
    }

    return (<App>
      <Switch>
        <MyRoute exact path={routes.HOME} component={Muro} authUser={this.state.authUser}/>
        <Route exact path={routes.SIGN_UP} component={SignUp}/>
        <Route exact path={routes.SIGN_IN} component={Login}/>
      </Switch>
    </App>)
  }
}



export default AppRoutes;
