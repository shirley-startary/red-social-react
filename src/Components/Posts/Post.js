import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Post = (props) => {
  return (
    <div className="container">
      <Card>
        <CardBody>
          <CardTitle>{props.texto}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
          <Button className="mg-2">Eliminar ❌</Button>
          <Button className="mg-2">Editar ✏</Button>
          <Button className="mg-2">Like 👍</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;
