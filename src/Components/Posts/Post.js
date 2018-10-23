import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Form } from 'reactstrap';
import DeleteIcon from '../Global/images/bin.png';
import EditIcon from '../Global/images/edit.png';
import DisLikeIcon from '../Global/images/thumbs-up.png';
import LikeIcon from '../Global/images/thumbs-up-hand-symbol.png';

// const Post = (props) => {
class Post extends React.Component {

  handleClickEdit = (e) => {
    this.props.editAction(e)
  }
  
  handleOnChangeInputEdit = (e) => {
    this.props.onChangeInputEdit(e)
  }

  render() {
    if (this.props.comentario.autor.email === this.props.user.email) {
      return (<div className="container mg-2">
        <Card>
          <CardBody>
            <CardTitle>{this.props.comentario.autor.name}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>{this.props.comentario.mensaje}</CardText>
            <Form>
              <input onChange={this.handleOnChangeInputEdit} value={this.props.inputEdit}/>
              <Button>Guardar</Button>
              <Button>Cancelar</Button>
            </Form>
            <Button className="mg-2"
                onClick={this.props.deleteAction}
                data-id={this.props.comentario.postId}>
                <img src={DeleteIcon} data-id={this.props.comentario.postId} alt="eliminar"/>
            </Button>
            <Button className="mg-2"
                onClick={this.handleClickEdit}
                data-id={this.props.comentario.postId}>
                <img src={EditIcon} alt="edit" data-id={this.props.comentario.postId}/>
            </Button>
            <Button className="mg-2"><img src={DisLikeIcon} alt="like" /></Button>
          </CardBody>
        </Card>
      </div>)
    }
    return (
      <div className="container mg-2">
        <Card>
          <CardBody>
            <CardTitle>{this.props.comentario.autor.name}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>{this.props.comentario.mensaje}</CardText>
            <Button className="mg-2"><img src={DisLikeIcon} alt="like" /></Button>
          </CardBody>
        </Card>
      </div>
    );
  }
};

export default Post;
