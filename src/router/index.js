
import React from 'react'
import { Redirect } from 'react-router-dom'
// import Discover from '@/pages/discover'
// import Recommend from '@/pages/discover/c-pages/recommend';
// import Ranking from '@/pages/discover/c-pages/ranking';
// import Songs from '@/pages/discover/c-pages/songs';
// import DjRadio from '@/pages/discover/c-pages/djradio';
// import Artist from '@/pages/discover/c-pages/artist';
// import Album from '@/pages/discover/c-pages/album';

// import Friend from '@/pages/friend'
// import Mine from '@/pages/mine'

const Discover = React.lazy(_ => import('@/pages/discover'))
const Recommend = React.lazy(_ => import('@/pages/discover/c-pages/recommend'))
const Ranking = React.lazy(_ => import('@/pages/discover/c-pages/ranking'))
const Songs = React.lazy(_ => import('@/pages/discover/c-pages/songs'))
const DjRadio = React.lazy(_ => import('@/pages/discover/c-pages/djradio'))
const Artist = React.lazy(_ => import('@/pages/discover/c-pages/artist'))
const Album = React.lazy(_ => import('@/pages/discover/c-pages/album'))

const Friend = React.lazy(_ => import('@/pages/friend'))
const Mine = React.lazy(_ => import('@/pages/mine'))




const routes = [
  {
    path: '/',
    exact: true,
    render: () => (<Redirect to='/discover' />)


  },
  {
    path: '/friend',
    component: Friend
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/discover',
    component: Discover,
    route: [
      {
        path: '/discover',
        exact: true,
        render: () => (<Redirect to='/discover/recommend' />)
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/ranking',
        component: Ranking
      },
      {
        path: '/discover/songs',
        component: Songs
      },
      {
        path: '/discover/djradio',
        component: DjRadio
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/album',
        component: Album
      },


    ]
  }

]
export default routes