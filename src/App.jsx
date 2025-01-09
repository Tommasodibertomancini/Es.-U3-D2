import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import { Container } from 'react-bootstrap';
import Welcome from './components/Welcome';
//import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';


function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <BookList />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
