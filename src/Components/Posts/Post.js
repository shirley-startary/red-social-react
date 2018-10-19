import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import DeleteIcon from '../Global/images/bin.png';
import EditIcon from '../Global/images/edit.png';
import DisLikeIcon from '../Global/images/thumbs-up.png';
import LikeIcon from '../Global/images/thumbs-up-hand-symbol.png';

const Post = (props) => {
  if (props.comentario.autor.email === props.user.email) {
    return (<div className="container mg-2">
      <Card>
        <CardBody>
          <CardTitle>{props.comentario.autor.name}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{props.comentario.mensaje}</CardText>
          <Button className="mg-2"><img src={DeleteIcon} alt="eliminar"/></Button>
          <Button className="mg-2"><img src={EditIcon} alt="edit"/></Button>
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
