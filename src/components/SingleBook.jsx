import { Badge, Card, Col } from 'react-bootstrap'
const SingleBook = ({ changeSelectedBook, selectedBook, type }) => {
  return (
    <Col key={type.asin}>
      <Card
        onClick={() => changeSelectedBook(type.asin)}
        className={selectedBook === type.asin ? 'border-danger' : 'border-secondary'}
      >
        <Card.Img
          variant="top"
          src={type.img}
          className="w-100 d-block"
          style={{ aspectRatio: 1 / 1, height: '480px' }}
        />
        <Card.Body>
          <Card.Title style={{ minHeight: '5rem', lineHeight: '1.2rem', fontSize: '1.2rem' }}>{type.title}</Card.Title>
          <div className="d-flex justify-content-between">
            <Card.Text className="fw-medium">{type.category}</Card.Text>
            <Badge
              className={
                selectedBook === type.asin ? 'align-self-start p-2 bg-danger' : 'align-self-start p-2 bg-secondary'
              }
            >
              {type.price} €
            </Badge>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleBook
