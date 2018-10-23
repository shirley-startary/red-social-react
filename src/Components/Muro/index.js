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
      inputEdit:'',
      user:null,
      comentarios:[],
    }
  }

  onSubmit = (e) =>{
    e.preventDefault()
    const key = database.ref().child('posts').push().key;

    database.ref(`/Posts/${key}`).set({
      mensaje: this.state.textArea,
      postId: key,
      corazones: 0,
      autor: this.state.user,
    });
  }

  onChange = (texto)=>{
    this.setState({textArea: texto})
  }

  onChangeInputEdit = (e) => {
    console.log(e.target.value);
    this.setState({inputEdit: e.target.value})

  }


  deleteAction = (e) => {
    const confirm = window.confirm("¿Está seguro que quiere eliminar el mensaje?");
    const postId = e.target.dataset.id
    if (confirm) {
      console.log(postId);
        database.ref(`/Posts/${postId}`).remove();
    }
    this.updateStateComentarios()
  }

  editComentario = (e) => {
    console.log(e.target.dataset.id);
    const postId = e.target.dataset.id

    database.ref(`/Posts/${postId}/mensaje`).once('value', (snapshot) => {
      console.log(snapshot.val());
      this.setState({inputEdit:snapshot.val()})
      // const newArray = Object.values(snapshot.val()).reverse();
      // this.setState({comentarios: newArray})
    })
  }

  updateStateComentarios = () => {
    database.ref('Posts').on('value', (snapshot) => {
      const newArray = Object.values(snapshot.val()).reverse();
      this.setState({comentarios: newArray})
    })
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

    this.updateStateComentarios();

  }

  shouldComponentUpdate () {
    return true;
  }

  render() {
    return (
      <div className="Muro container">
        <Navbar history={this.props.history}/>
        <h3> Bienvenido a tu muro</h3>
        <FormPost onChange={this.onChange} onSubmit={this.onSubmit} textArea={this.state.textArea}/>
        <ListPosts ListaComentarios={this.state.comentarios} inputEdit={this.state.inputEdit} user={this.state.user} deleteAction={this.deleteAction} editAction={this.editComentario} onChangeInputEdit={this.onChangeInputEdit} />
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
