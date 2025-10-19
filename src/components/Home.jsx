import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SongCard from "./SongCard";
import { useSelector } from "react-redux";
import Favourites from "./Favourites";

const Home = () => {
  const searchResults = useSelector((state) => state.search?.results || []);
  const [rockSongs, setRockSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [hipHopSongs, setHipHopSongs] = useState([]);

  const fillMusicSection = async (artistName, setter) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
      if (response.ok) {
        const { data } = await response.json();
        setter(data.slice(0, 4));
      } else {
        throw new Error("Error fetching songs");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fillMusicSection("queen", setRockSongs);
    fillMusicSection("katyperry", setPopSongs);
    fillMusicSection("eminem", setHipHopSongs);
  }, []);

  return (
    <Container fluid className="mainPage" style={{ marginLeft: "230px" }}>
      <Row>
        <Col xs={12} className="d-none d-md-flex justify-content-evenly mainLinks mb-4">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      {searchResults.length > 0 && (
        <Row className="mb-4">
          <Col xs={12}>
            <h2 className="text-light">Search Results</h2>
            <Row>
              {searchResults.map((song) => (
                <Col xs={12} sm={6} md={4} lg={3} key={song?.id}>
                  <SongCard song={song} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}

      <Row className="mb-4">
        <Col xs={12}>
          <h2 className="text-light">Rock Classics</h2>
          <Row>
            {rockSongs.map((song) => (
              <Col xs={12} sm={6} md={4} lg={3} key={song?.id}>
                <SongCard song={song} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={12}>
          <h2 className="text-light">Pop Culture</h2>
          <Row>
            {popSongs.map((song) => (
              <Col xs={12} sm={6} md={4} lg={3} key={song?.id}>
                <SongCard song={song} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={12}>
          <h2 className="text-light">HipHop</h2>
          <Row>
            {hipHopSongs.map((song) => (
              <Col xs={12} sm={6} md={4} lg={3} key={song?.id}>
                <SongCard song={song} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Favourites />
    </Container>
  );
};

export default Home;
