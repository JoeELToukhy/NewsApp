import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Alert, View, ActivityIndicator} from 'react-native';
import { Container, Content, List, Text } from 'native-base';
import HeadlineData from '../component/headlineData'

class HistoryTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
        }
    }
  

  render() {
      console.log(this.props.history)
      let view = this.state.isLoading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
          <Text style={{marginTop: 10}} children="Please Wait.." />
        </View>
      ) : (
        <List
          dataArray={this.props.history}
          renderRow={(item) => {
              return (
                <HeadlineData data={item} />
              )
          }} />
      )
      console.log(this.props.history)
    return (
      <Container>
        <Content>
          {view}
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state){
    return{
      history : state.history
    };}
  export default connect(mapStateToProps)(HistoryTab);