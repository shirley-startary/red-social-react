import React from 'react';
import Post from './Post';
// import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const ListPosts = (props) => {

  return(
    <div className="container">
      <h2>Comentarios</h2>
      <div>
        {
          props.ListaComentarios.map(comentario => {
            return (<Post comentario={comentario} user={props.user} key={comentario.postId}/>)
          })
        }
      </div>
    </div>
  )
}

export default ListPosts;
