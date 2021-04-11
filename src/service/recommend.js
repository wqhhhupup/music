import { request } from './index'

export function getTopBanners() {
  return request({
    url: 'banner'
  })
}
export function getPersonalized() {
  return request({
    url: 'personalized',
    params: {
      limit: 8
    }
  })
}
export function getNewAlbums(limit) {
  return request({
    url: 'top/album',
    params: {
      limit
    }
  })
}
export function getRanking(idx) {
  return request({
    url: 'top/list',
    params: {
      idx,
      limit: 10
    }
  })
}