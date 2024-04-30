import CommentList from './Commentlist'
import AddComment from './AddComment'
import { useState, useEffect } from 'react'
const URL = 'https://striveschool-api.herokuapp.com/api/comments/'

const CommentArea = ({ bookId }) => {
  const [comments, setComments] = useState([])

  const fetchData = async () => {
    try {
      const resp = await fetch(URL + bookId, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmYTdhMDI4MzJlODAwMTk4NzMwYjUiLCJpYXQiOjE3MTQzOTkyODcsImV4cCI6MTcxNTYwODg4N30.nnv202j_wZhkeAVFlNyy29DzXdworYBkTkocu0wXEhs',
        },
      })

      if (resp.ok) {
        const result = await resp.json()
        setComments(result)
      } else {
        throw new Error('Error retrieving data from comments')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    bookId && fetchData()
  }, [bookId])

  return (
    comments && (
      <div className="border  rounded">
        <CommentList commentsToShow={comments} />
        <AddComment asin={bookId} />
      </div>
    )
  )
}

export default CommentArea
