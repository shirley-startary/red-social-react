// Dependencias
import React, { Component } from 'react';
import ListPosts from '../Posts/ListPost';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { database, auth } from '../../firebase';

class Muro extends Component {
  constructor(props){
    super(props)
    this.state = {
      textArea:'',
      user:null,
      comentarios:[],
    }
  }

  onSubmit = (e) =>{
    e.preventDefault()
    database.ref('Posts').push({
      mensaje: this.state.textArea,
      corazones: 0,
      autor: this.state.user,
    });
  }

  onChange = (texto)=>{
    this.setState({textArea: texto})
  }


  componentDidMount(){
    auth.onAuthStateChanged((user) => {
      this.setState({
        user:{
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          uid: user.uid,
        }
      })
    });

    database.ref('Posts').on('value', (snapshot) => {
      const newArray = Array.from(snapshot.val());
      console.log(newArray);
      // this.setState({comentarios: })
    })
  }
  render() {
    return (
      <div className="Muro container">
        <h1> Bienvenido a tu muro</h1>
        <FormPost onChange={this.onChange} onSubmit={this.onSubmit} textArea={this.state.textArea}/>
        <ListPosts ListaComentarios={this.state.comentarios} />
      </div>
    );
  }
};


// Componente Formulario del post
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
