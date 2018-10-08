// Dependencias
import React, { Component } from 'react';
import ListPosts from '../Posts/ListPost';

class Muro extends Component {
  render() {
    return (
      <div className="Muro">
        <h1> Muro component</h1>
        <ListPosts />
      </div>
    );
  }
};

export default Muro;
