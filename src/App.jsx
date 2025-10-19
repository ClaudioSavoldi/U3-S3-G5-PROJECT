import { Provider } from "react-redux";
import store from "./redux/store/store";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Player from "./components/Player";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Provider store={store}>
      <Container fluid className="p-0">
        <Row>
          <Col xs={2} className="p-0">
            <Sidebar />
          </Col>

          <Col xs={10} className="offset-2 p-0">
            <Home />
          </Col>
        </Row>

        <Player />
      </Container>
    </Provider>
  );
}

export default App;
