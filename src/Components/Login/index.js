// Dependencias
import React, { Component } from 'react';
import { SignUpLink } from '../SignUp';
import { Link , withRouter} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { auth } from '../../firebase';
import * as routes from '../../constants/routesConstants';
import { providerGoogle, providerFacebook } from '../../firebase';

const SignInPage = (props) => {
  return (<div className="Login container">
            <h1>SignIn</h1>
            <SignInForm history={ props.history }/>
            <SignUpLink />
          </div>)
}

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
     .then( result => {
       this.setState({...INITIAL_STATE});
       history.push(routes.HOME);
     })
     .catch(error => console.log(error))
  }

  SignInRedes = (e) => {
    let provider = null;
    switch (e.target.id) {
        case 'google':
          provider = providerGoogle;
          break;
        case 'facebook':
          provider = providerFacebook;
          break;
        default:
          console.log('no es un codigo correcto');
    }

    auth.signInRedes(provider).then((result) => {
      console.log(result);
    });
  }



  render() {
    const {password, email} = this.state;
    const isInvalid = password.trim() === '' ||
                      email.trim()=== '';
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="exampleEmail" className="text-left">Email</Label>
          <Input value={this.state.email} type="email" name="email"
                 onChange={this.onChange} placeholder="Email Address" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input value={this.state.password} type="password" name="password"
                 onChange={this.onChange} placeholder="Password" />
        </FormGroup>
        <Button type="submit" size="sm" block disabled={isInvalid}>Log In</Button>
        <div className="text-center">
          <Button size="sm" className="mg-2" color="danger" type="button" id="google" onClick={this.SignInRedes} >Log In Google</Button>
          <Button size="sm" className="mg-2" color="primary" type="button" id="facebook" onClick={this.SignInRedes}>Log In Facebook</Button>
        </div>
      </Form>)
  }
};

const SignInLink = () => {
  return(<p className="small text-center text-gray-soft">
            Already have an account?
            <Link to={routes.SIGN_IN}> Sign In</Link>
        </p>)
}

export default withRouter(SignInPage);

export {
  SignInForm,
  SignInLink,
}
