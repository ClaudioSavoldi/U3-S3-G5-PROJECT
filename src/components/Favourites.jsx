import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { removeFromLikedAction, setCurrentSongAction } from "../redux/actions";

const Favourites = () => {
  const likedSongs = useSelector((state) => state.liked.list);
  const dispatch = useDispatch();

  if (!likedSongs || likedSongs.length === 0) {
    return <p className="text-center mt-4 text-light">No liked songs yet.</p>;
  }

  return (
    <>
      <h2 className="text-light mb-3">Liked Songs</h2>
      <Row>
        {likedSongs.map((song, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-3">
            <Card
              className="text-center"
              style={{ cursor: "pointer", background: "none", border: "none" }}
              onClick={() => dispatch(setCurrentSongAction(song))}
            >
              <Card.Img variant="top" src={song.album?.cover_medium || "assets/placeholder.png"} alt={song.title || "Unknown Title"} />
              <Card.Body>
                <Card.Title className="text-light">{song.title || "Unknown Title"}</Card.Title>
                <Card.Text className="text-light">{song.artist?.name || "Unknown Artist"}</Card.Text>
                <HeartFill
                  color="green"
                  size={20}
                  onClick={() => {
                    if (song.id) dispatch(removeFromLikedAction(song.id));
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Favourites;
