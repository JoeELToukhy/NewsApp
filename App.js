import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import TabScreen from './src/screens/TabScreen'
import ArticleDetail from './src/screens/ArticleDetail'

export default class App extends Component {
  render() {
    return (
      <Router hideNavBar="true">
        <Scene navBarButtonColor='white' navigationBarStyle={{backgroundColor:'#3F51B5'}} key="root">
          <Scene key="pageOne" component={TabScreen} title="News" initial={true} />
          <Scene key="articleDetail" component={ArticleDetail} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}