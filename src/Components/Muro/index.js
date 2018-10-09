// Dependencias
import React, { Component } from 'react';
import ListPosts from '../Posts/ListPost';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { database } from '../../firebase';

class Muro extends Component {
  constructor(props){
    super(props)
    this.state = {
      textArea:'',
    }
  }

  onSubmit = (e) =>{
    console.log('hola');
    e.preventDefault()
  }

  onChange = (texto)=>{
    this.setState({textArea: texto})
  }

  conponentDidMount(){
    database.ref('Post')
  }

  render() {
    console.log(this.state)
    return (
      <div className="Muro container">
        <h1> Bienvenido a tu muro</h1>
        <FormPost onChange={this.onChange} onSubmit={this.onSubmit} textArea={this.state.textArea}/>
        <ListPosts  />
      </div>
    );
  }
};

class FormPost extends Component {
  constructor(props) {
    super(props);
  }

  onChangeTextArea = (e) => {
      this.props.onChange(e.target.value)
  }

  render () {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" value={this.props.textArea} onChange={this.onChangeTextArea} />
        </FormGroup>
        <Button>Enviar</Button>
      </Form>);
  }
}

export default Muro;
