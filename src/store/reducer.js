// import { combineReducers } from 'redux'
import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store'
import { reducer as playerReducer } from '@/pages/app-player/app-play-bar/store'
import { combineReducers } from "redux-immutable";

const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})

export default cReducer