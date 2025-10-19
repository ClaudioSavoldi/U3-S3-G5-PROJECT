import { useSelector, useDispatch } from "react-redux";
import { addToLikedAction, removeFromLikedAction, setCurrentSongAction } from "../redux/actions";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";

const SongCard = ({ song }) => {
  const liked = useSelector((state) => state.liked.list);
  const dispatch = useDispatch();
  if (!song) return null;
  const isLiked = liked.includes(song.id);

  return (
    <Card className="mb-3 text-center song-card" style={{ cursor: "pointer", maxWidth: "250px" }} onClick={() => dispatch(setCurrentSongAction(song))}>
      <Card.Img variant="top" src={song.album?.cover_medium} className="img-fluid" />
      <Card.Body>
        <Card.Title>{song.title}</Card.Title>
        <Card.Text>{song.artist.name}</Card.Text>
        {isLiked ? (
          <HeartFill
            color="green"
            onClick={() => {
              dispatch(removeFromLikedAction(song.id));
            }}
          />
        ) : (
          <Heart
            onClick={() => {
              dispatch(addToLikedAction(song.id));
            }}
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default SongCard;
