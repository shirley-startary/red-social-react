import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Form } from 'reactstrap';
import DeleteIcon from '../Global/images/bin.png';
import EditIcon from '../Global/images/edit.png';
import DisLikeIcon from '../Global/images/thumbs-up.png';
import LikeIcon from '../Global/images/thumbs-up-hand-symbol.png';

// const Post = (props) => {
  // console.log(props);
  class ClassName extends React.Component {

  if (props.comentario.autor.email === props.user.email) {
    return (<div className="container mg-2">
      <Card>
        <CardBody>
          <CardTitle>{props.comentario.autor.name}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{props.comentario.mensaje}</CardText>
          <Form>
            <input placeholder={'Modifica tu mensaje'} value={if()props.inputEdit}/>
            <Button>Guardar</Button>
            <Button>Cancelar</Button>
          </Form>
          <Button className="mg-2"
              onClick={props.deleteAction}
              data-id={props.comentario.postId}>
              <img src={DeleteIcon} data-id={props.comentario.postId} alt="eliminar"/>
          </Button>
          <Button className="mg-2"
              onClick={props.editAction}
              data-id={props.comentario.postId}>
              <img src={EditIcon} alt="edit" data-id={props.comentario.postId}/>
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
          <CardTitle>{props.comentario.autor.name}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{props.comentario.mensaje}</CardText>
          <Button className="mg-2"><img src={DisLikeIcon} alt="like" /></Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;
