import {
  CHANGE_BANNERS,
  CHANGE_PERSONALIZED,
  CHANGE_NEWALBUMS,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_TOP_RANKING
} from './constans'
import { Map } from 'immutable'



const initialState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbums: [],
  topRanking: [],
  newRanking: [],
  originRanking: []
})

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return state.set('topBanners', action.banners)
    case CHANGE_PERSONALIZED:
      return state.set('hotRecommend', action.personalized)
    case CHANGE_NEWALBUMS:
      return state.set('newAlbums', action.newAlbums)

    case CHANGE_NEW_RANKING:
      return state.set('newRanking', action.newRanking)
    case CHANGE_ORIGIN_RANKING:
      return state.set('originRanking', action.originRanking)
    case CHANGE_TOP_RANKING:
      return state.set('topRanking', action.topRanking)
    default:
      return state
  }

}