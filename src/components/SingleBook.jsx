import { Badge, Card, Col } from 'react-bootstrap'
import CommentArea from './CommentArea'
import { useState } from 'react'

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false)

  const change = () => {
    setSelected(!selected)
  }
  return (
    <Col key={props.type.asin}>
      <Card onClick={change} className={selected ? 'border-danger' : 'border-secondary'}>
        <Card.Img
          variant="top"
          src={props.type.img}
          className="w-100 d-block"
          style={{ aspectRatio: 1 / 1, height: '480px' }}
        />
        <Card.Body>
          <Card.Title style={{ minHeight: '5rem', lineHeight: '1.2rem', fontSize: '1.2rem' }}>
            {props.type.title}
          </Card.Title>
          <div className="d-flex justify-content-between">
            <Card.Text className="fw-medium">{props.type.category}</Card.Text>
            <Badge className={selected ? 'align-self-start p-2 bg-danger' : 'align-self-start p-2 bg-secondary'}>
              {props.type.price}
            </Badge>
          </div>
        </Card.Body>
      </Card>
      {selected && <CommentArea bookId={props.type.asin} />}
    </Col>
  )
}

export default SingleBook
