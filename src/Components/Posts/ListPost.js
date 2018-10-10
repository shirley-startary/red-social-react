import React, { Component } from 'react';
import Post from './Post';
// import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class ListPosts extends Component {

  render(){
    console.log(this.props);
    return(
      <div className="container">
        <h2>Comentarios</h2>
        <Post/>
      </div>
    )
  }
}

export default ListPosts;
