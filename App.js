import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import TabScreen from './src/screens/TabScreen'
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import allReducers from './src/reducers/index';
import ArticleDetail from './src/screens/ArticleDetail'
import SourceList from './src/screens/SourceList';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(allReducers)}>
        <Router hideNavBar="true">
          <Scene navBarButtonColor='white' navigationBarStyle={{backgroundColor:'#3F51B5'}} key="root">
            <Scene key="TabScreen" component={TabScreen} title="News" initial={true} />
            <Scene key="articleDetail" component={ArticleDetail} title="article" />
            <Scene key="sourceList" component={SourceList} title="source" />
          </Scene>
        </Router>
      </Provider>
    )
  }
}