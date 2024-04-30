import CommentList from './Commentlist'
import AddComment from './AddComment'
import { useState, useEffect } from 'react'
const URL = 'https://striveschool-api.herokuapp.com/api/comments/'

const CommentArea = (props) => {
  const [comments, setComments] = useState([])

  const fetchData = async () => {
    try {
      const resp = await fetch(URL + props.bookId, {
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
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    comments && (
      <div className="border  rounded-bottom">
        <CommentList commentsToShow={comments} />
        <AddComment asin={props.bookId} />
      </div>
    )
  )
}

export default CommentArea
