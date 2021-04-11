import {
  CHANGE_BANNERS, CHANGE_PERSONALIZED, CHANGE_NEWALBUMS, CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_TOP_RANKING
} from './constans';
import {
  getTopBanners,
  getPersonalized,
  getNewAlbums,
  getRanking

} from '@/service/recommend.js'



const changeBannersAction = (banners) => {
  return {
    type: CHANGE_BANNERS,
    banners
  }
}

const changePersonalizedAction = (personalized) => {
  return {
    type: CHANGE_PERSONALIZED,
    personalized
  }

}

const changeNewAlbumAction = (newAlbums) => {
  return {
    type: CHANGE_NEWALBUMS,
    newAlbums
  }
}
const changeNewRankingAction = (newRanking) => {
  return {
    type: CHANGE_NEW_RANKING,
    newRanking
  }
}

const changeTopRankingAction = (topRanking) => {
  return {
    type: CHANGE_TOP_RANKING,
    topRanking
  }
}

const changeOriginRankingAction = (originRanking) => {
  return {
    type: CHANGE_ORIGIN_RANKING,
    originRanking
  }
}


export const getChangeBannersAction = () => {
  return dispatch => {
    getTopBanners().then((res) => {
      dispatch(changeBannersAction(res.banners))
    })
  }
}

export const getChangePersonalizedAction = () => {
  return dispatch => {
    getPersonalized().then((res) => {
      dispatch(changePersonalizedAction(res.result))
    })
  }
}

export const getChangechangeNewAlbumActionn = () => {
  return dispatch => {
    getNewAlbums(10).then((res) => {
      // console.log(res);
      dispatch(changeNewAlbumAction(res.albums))

    })
  }
}
export const getChangechangeRankingsction = (idx) => {
  return dispatch => {
    switch (idx) {
      case 0:
        getRanking(0).then((res) => {
          dispatch(changeNewRankingAction(res.playlist))
        })
        break;
      case 2:
        getRanking(2).then((res) => {
          dispatch(changeOriginRankingAction(res.playlist))
        })
        break;
      case 3:
        getRanking(3).then((res) => {
          dispatch(changeTopRankingAction(res.playlist))
        })
        break;
      default:
        return []

    }
  }
}