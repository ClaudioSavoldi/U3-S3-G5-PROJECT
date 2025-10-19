export const ADD_TO_LIKED = "ADD_TO_LIKED";
export const REMOVE_FROM_LIKED = "REMOVE_FROM_LIKED";
export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

export const addToLikedAction = (songData) => ({
  type: ADD_TO_LIKED,
  payload: songData,
});

export const removeFromLikedAction = (songData) => ({
  type: REMOVE_FROM_LIKED,
  payload: songData,
});

export const setCurrentSongAction = (songData) => ({
  type: SET_CURRENT_SONG,
  payload: songData,
});

export const setSearchResultsAction = (songsArray) => ({
  type: SET_SEARCH_RESULTS,
  payload: songsArray,
});
