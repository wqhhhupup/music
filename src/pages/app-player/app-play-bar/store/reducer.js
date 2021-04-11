import { GET_SONG_DETAIL, CHANGE_SEQ, CHANGE_CURRENTSONG_INDEX, CHANGE_SONG_LIST } from './constans'
import { Map } from 'immutable'
const initialState = Map({
  songDetail: {},
  songList: [],
  currentSongIndex: 0,
  sequence: 0
})

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_SONG_DETAIL:
      return state.set('songDetail', action.songDetail)
    case CHANGE_SEQ:
      return state.set('sequence', action.currentSequence)
    case CHANGE_SONG_LIST:
      return state.set('songList', action.item)
    case CHANGE_CURRENTSONG_INDEX:
      return state.set('currentSongIndex', action.currentSongIndex)
    default:
      return state
  }
}