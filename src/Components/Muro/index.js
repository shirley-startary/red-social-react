// Dependencias
import React, { Component } from 'react';
import ListPosts from '../Posts/ListPost';
import Navbar from '../Global/NavBar';
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
    const key = database.ref().child('posts').push().key;

    database.ref('Posts').push({
      mensaje: this.state.textArea,
      postId: key,
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
      const newArray = Object.values(snapshot.val()).reverse();
      this.setState({comentarios: newArray})
    })
  }
  render() {
    return (
      <div className="Muro container">
        <Navbar history={this.props.history}/>
        <h3> Bienvenido a tu muro</h3>
        <FormPost onChange={this.onChange} onSubmit={this.onSubmit} textArea={this.state.textArea}/>
        <ListPosts ListaComentarios={this.state.comentarios} user={this.state.user} />
      </div>
    );
  }
};


// Componente Formulario del post
class FormPost extends Component {

  onChangeTextArea = (e) => {
      this.props.onChange(e.target.value)
  }

  render () {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <FormGroup>
          <Label for="exampleText">Ingresa un comentario</Label>
          <Input type="textarea" name="text" id="exampleText" value={this.props.textArea} onChange={this.onChangeTextArea} />
        </FormGroup>
        <Button>Enviar</Button>
      </Form>);
  }
}

export default Muro;
