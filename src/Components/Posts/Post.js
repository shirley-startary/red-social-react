import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Post = (props) => {
  return (
    <div className="container">
      <Card>
        <CardBody>
          <CardTitle>{props.texto}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
          <Button className="mg-2">Eliminar <span>❌</span></Button>
          <Button className="mg-2">Editar <span>✏</span></Button>
          <Button className="mg-2">Like <span>👍</span></Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;
