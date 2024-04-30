import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import { Container } from 'react-bootstrap'
import BookList from './components/BookList'
import allBooks from '../src/data/books/allBooks.json'

function App() {
  return (
    <div className="App">
      <MyNav name="EpiBooks" />
      <Container fluid>
        {/* <Welcome /> */}
        <BookList data={allBooks} />
      </Container>
      <MyFooter />
    </div>
  )
}

export default App
