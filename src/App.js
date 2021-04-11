import React, { Component, Suspense } from 'react';

import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
// import Test from 'components/test';
import Header from 'components/app-header'
import Footer from 'components/app-footer'
import PlayBar from '@/pages/app-player/app-play-bar'

import Loading from '@/common/loading';

import routes from './router'
import store from '@/store'
import { Provider } from 'react-redux'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Header />
          <Suspense fallback={<Loading />}>
            {renderRoutes(routes)}
          </Suspense>
          <Footer />
          <PlayBar />
        </HashRouter>
      </Provider>
    );
  }
}

export default App;