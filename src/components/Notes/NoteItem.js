import React from 'react'
import { Card } from 'react-bootstrap';

const NoteItem = (props) => {
  const {note} = props;
  return (
    <div className='col-md-3'>
      <Card className='my-3'>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.description}</Card.Text>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default NoteItem