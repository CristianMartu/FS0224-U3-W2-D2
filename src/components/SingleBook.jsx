import { Badge, Card, Col } from 'react-bootstrap'
const SingleBook = ({ changeSelectedBook, selectedBook, type }) => {
  return (
    <Card
      onClick={() => changeSelectedBook(type.asin)}
      className={selectedBook === type.asin ? 'border-danger' : 'border-secondary'}
      key={type.asin}
      style={{ cursor: 'pointer', width: '250px' }}
    >
      <div className="cardContainerImg">
        <Card.Img variant="top" src={type.img} className="imageCard" style={{}} />
      </div>
      <Card.Body className="d-flex flex-column justify-content-end">
        <Card.Title className="cardTitle">{type.title}</Card.Title>
        <div className="d-flex justify-content-between">
          <Card.Text className="fw-medium mb-0">{type.category}</Card.Text>
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
  )
}

export default SingleBook
