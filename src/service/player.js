import { request } from './index'

export function getSongPlay(ids){
  return request({
    url:'song/detail',
    params:{
      ids
    }
  })
}