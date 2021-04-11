import { getSongPlay } from '@/service/player'
import {
  GET_SONG_DETAIL,
  CHANGE_SEQ,
  CHANGE_SONG_LIST,
  CHANGE_CURRENTSONG_INDEX,
} from './constans'



const changeSongAction = (songDetail) => {
  return {
    type: GET_SONG_DETAIL,
    songDetail

  }
}

const changeSeqAction = (currentSequence) => {
  return {
    type: CHANGE_SEQ,
    currentSequence

  }
}
const changeSongListAction = (item) => {
  return {
    type: CHANGE_SONG_LIST,
    item
  }
}


const changeCurrentSongIndexAction = (currentSongIndex) => {
  return {
    type: CHANGE_CURRENTSONG_INDEX,
    currentSongIndex
  }
}

export const getChangeSeqAction = (currentSequence) => {
  return (dispatch) => {
    dispatch(changeSeqAction(currentSequence))
  }
}

export const getChangeSwichSongAction = (num) => {
  return (dispatch, getState) => {
    let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])
    const sequence = getState().getIn(['player', 'sequence'])
    const playList = getState().getIn(['player', 'songList'])
    currentSongIndex += num
    switch (sequence) {
      case 0:
        if (currentSongIndex === playList.length) currentSongIndex = 0
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1
        break
      default:
        if (currentSongIndex === playList.length) currentSongIndex = 0
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1
    }
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
    dispatch(changeSongAction(playList[currentSongIndex]))

  }
 
}





export const getChangeSongAction = (id) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'songList'])
    const newList = [...playList]
    const currentSongIndex = newList.findIndex(item => item.id === id)

    getSongPlay(id).then((res) => {

      if (currentSongIndex === -1) {
        newList.push(res.songs[0])
        dispatch(changeSongListAction(newList))
        dispatch(changeCurrentSongIndexAction(newList.length - 1))
      } else {
        dispatch(changeCurrentSongIndexAction(currentSongIndex))
      }
      dispatch(changeSongAction(res.songs[0]))

    })
  }
}