// Dependencias
import React, { Component } from 'react';
import { SignInLink } from '../Login';
import { Link, withRouter} from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as routes from '../../constants/routesConstants';
import { auth } from '../../firebase';
// console.log();

const SignUpPage = ({ history }) => {
  return (<div className="SignUp container">
            <h2>Sign Up</h2>
            <SignUpForm history={ history }/>
            <SignInLink />
          </div>)
}

const INITIAL_STATE = {
  firstName : '',
  lastName: '',
  email : '',
  passwordOne : '',
  passwordTwo: '',
  error : null
};

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE };
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props
    auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.passwordOne)
      .then( authUser => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch( error => console.log(error))
  }

  render() {
    const {firstName, lastName, email, passwordOne, passwordTwo} = this.state;
    const isInvalid =
      firstName.trim() == '' ||
      lastName.trim() == '' ||
      passwordOne.trim() == '' ||
      passwordTwo.trim() == '' ||
      passwordOne !== passwordTwo ||
      email.trim() == '';

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup row inline>
          <Col sm={6}>
              <Label for="firstName" className="text-left">First Name *</Label>
              <Input type="text" name="firstName" id="first-name" onChange={this.onChange} value={firstName}/>
          </Col>
          <Col sm={6}>
              <Label for="lastName">Last Name * </Label>
              <Input type="text" name="lastName" id="last-name" onChange={this.onChange} value={lastName}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={12}>
              <Label for="email">Email *</Label>
              <Input type="email" name="email" id="Email" onChange={this.onChange} value={email}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={12}>
              <Label for="passwordOne">Password *</Label>
              <Input type="password" name="passwordOne" id="passwordOne" onChange={this.onChange} value={passwordOne}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={12}>
              <Label for="passwordTwo">Password confirm *</Label>
              <Input type="password" name="passwordTwo" id="passwordTwo" onChange={this.onChange} value={passwordTwo}/>
          </Col>
        </FormGroup>
        <Button type="submit" disabled={isInvalid} >Sign Up</Button>
        <p className="small text-center text-gray-soft">
          By clicking "Sign up" you agree to our
          <a href="#">Terms of Service.</a>
        </p>
      </Form>
    );
  }
};

const SignUpLink = () => {
  return (<p className="small text-center text-gray-soft">
    Don't have an account yet?
    <Link to={routes.SIGN_UP}> Sign Up</Link>
  </p>)
}

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
}
