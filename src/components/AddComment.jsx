import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
const URL = 'https://striveschool-api.herokuapp.com/api/comments/'

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: null,
  })

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
          'Content-type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmYTdhMDI4MzJlODAwMTk4NzMwYjUiLCJpYXQiOjE3MTQzOTkyODcsImV4cCI6MTcxNTYwODg4N30.nnv202j_wZhkeAVFlNyy29DzXdworYBkTkocu0wXEhs',
        },
      })
      if (response.ok) {
        alert('Review submitted!')
        setComment({
          comment: '',
          rate: 1,
          elementId: null,
        })
      } else {
        throw new Error('Error in sending!')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="my-3 mx-3">
      <Form onSubmit={asin ? sendComment : (e) => e.preventDefault()}>
        <Form.Group className="mb-2">
          <Form.Label>Review</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the text"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
                elementId: asin,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
                elementId: asin,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="secondary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  )
}

export default AddComment
