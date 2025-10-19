import { useSelector } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";
import next from "../assets/next.png";
import prev from "../assets/prev.png";
import play from "../assets/play.png";
const Player = () => {
  const currentSong = useSelector((state) => state.player.currentSong);

  if (!currentSong) {
    return (
      <div className="bg-dark text-light p-3 fixed-bottom w-100">
        <Container>
          <Row>
            <Col className="text-center">No song playing</Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-dark text-light p-3 fixed-bottom w-100">
      <Container>
        <Row className="align-items-center">
          <Col xs={2}>
            <Image src={currentSong.album.cover_small} rounded fluid />
          </Col>

          <Col xs={6}>
            <h6 className="mb-0">{currentSong.title}</h6>
            <small>{currentSong.artist.name}</small>
          </Col>

          <Col xs={4} className="d-flex justify-content-end">
            <img src={prev} alt="prev" width={24} className="mx-1" />
            <img src={play} alt="play" width={24} className="mx-1" />
            <img src={next} alt="next" width={24} className="mx-1" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Player;
