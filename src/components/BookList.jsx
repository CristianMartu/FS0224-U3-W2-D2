import { Alert, ButtonGroup, Col, Container, Dropdown, DropdownButton, Form, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'
import { useState } from 'react'
import CommentArea from './CommentArea'
import AddComment from './AddComment'

const BookList = (props) => {
  const [list, setList] = useState(props.data)
  const [genre, setGenre] = useState('all')
  const [search, setSearch] = useState('')

  const [selectedBook, setSelectedBook] = useState(null)

  const changeSelectedBook = (asin) => {
    setSelectedBook(asin)
  }

  const filteredBooks = list.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
      <ButtonGroup className="mt-2">
        <DropdownButton as={ButtonGroup} title="Category" id="bg-nested-dropdown" variant="dark">
          <Dropdown.Item eventKey="1" onClick={() => setGenre('fantasy')}>
            Fantasy
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={() => setGenre('history')}>
            History
          </Dropdown.Item>
          <Dropdown.Item eventKey="3" onClick={() => setGenre('horror')}>
            Horror
          </Dropdown.Item>
          <Dropdown.Item eventKey="4" onClick={() => setGenre('romance')}>
            Romance
          </Dropdown.Item>
          <Dropdown.Item eventKey="5" onClick={() => setGenre('scifi')}>
            Scifi
          </Dropdown.Item>
          <Dropdown.Item eventKey="5" onClick={() => setGenre('all')}>
            All
          </Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
      <h1 className="text-center">
        EpiBooks: <span className="fw-normal">{genre}</span>
      </h1>
      <Form.Control
        type="text"
        className="w-50 mx-auto"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Search book..."
      />
      <Row>
        <Col md={8}>
          <div
            className="d-flex flex-wrap justify-content-center align-items-baseline mt-5 row-gap-4 column-gap-3"
            id="container"
          >
            {genre !== 'all'
              ? filteredBooks
                  .filter((book) => book.category === genre)
                  .map((book, i) => (
                    <SingleBook
                      type={book}
                      key={'Book: ' + i}
                      selectedBook={selectedBook}
                      changeSelectedBook={changeSelectedBook}
                    />
                  ))
              : filteredBooks.map((book, i) => (
                  <SingleBook
                    type={book}
                    key={'Book: ' + i}
                    selectedBook={selectedBook}
                    changeSelectedBook={changeSelectedBook}
                  />
                ))}
          </div>
        </Col>
        <Col md={4} className="mt-5 row-gap-3">
          {/* {selectedBook && <CommentArea bookId={selectedBook} />} */}
          <CommentArea bookId={selectedBook} />
        </Col>
      </Row>
    </>
  )
}

export default BookList
