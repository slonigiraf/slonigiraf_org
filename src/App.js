import { Button, Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";
import logo from './logo.svg';
import {ReactComponent as Uniswap} from './uniswap.svg';
import 'bootswatch/dist/cerulean/bootstrap.min.css'; // Added this :boom:
import './App.css';

function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <header className="Slonigiraf - P2P education and blockchain">
        

      </header>
      <Container>
          <Row>
            <Col md={12} sm={12}>
            <iframe title="Promo video" width="560" height="315" src="https://www.youtube.com/embed/ea72-Nt5oOE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <a href="https://slon-i-giraf.ru/app/work?view=findTeacherView&knowledgeCourse=77&utm_content=1606559945976"><Button variant="primary" size="lg">Join us for free</Button></a>
              <a href="https://info.uniswap.org/pair/0x2B8795475a61C85636E1Ee13fd21ca1B7C860245"><Button variant="secondary" size="lg"> <Uniswap/>Swap Slonigiraf/Ethereum</Button></a>
              
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <br/>
              <a href="https://t.me/slonigiraf">Follow us on Telegram or: </a>
              <a href="https://wa.me/79099319358">WhatsApp, </a>
              <a href="mailto:info@slon-i-giraf.ru">Email</a>
            </Col>
          </Row>
        </Container>
        
    </div>
  );
}

export default App;
