import { ListGroupItem } from 'react-bootstrap'
const URL = 'https://striveschool-api.herokuapp.com/api/comments/'

const SingleComment = ({ comment }) => {
  const deleteComment = async (id) => {
    try {
      const resp = await fetch(URL + id, {
        method: 'DELETE',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmYTdhMDI4MzJlODAwMTk4NzMwYjUiLCJpYXQiOjE3MTQzOTkyODcsImV4cCI6MTcxNTYwODg4N30.nnv202j_wZhkeAVFlNyy29DzXdworYBkTkocu0wXEhs',
        },
      })

      if (resp.ok) {
        alert('The review has been deleted!')
      } else {
        throw new Error('The review has not been deleted!')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <ListGroupItem className="d-flex justify-content-between align-items-center">
      <p className="d-inline-block my-1 ">{comment.comment}</p>
      <i className="bi bi-x fs-5" onClick={() => deleteComment(comment._id)}></i>
    </ListGroupItem>
  )
}

export default SingleComment
