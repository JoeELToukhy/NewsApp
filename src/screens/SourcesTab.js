import React, { Component } from 'react';
import { Alert, View, ActivityIndicator} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Button } from 'native-base';
import { getSources } from '../service/news';
import SourcesData from  '../component/sourcesData'

export default class SourcesTab extends Component {

  constructor(props) {
    super(props);

    this.state = {
        isLoading: true,
        data: null
    }
  }

  componentDidMount(){
    getSources().then(data => {
        this.setState({
            isLoading: false,
            data: data
        });
    }, error => {
        Alert.alert('error', 'something went wrong')
    }
    )
  }

  render() {
    let view = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
        <Text style={{marginTop: 10}} children="Please Wait.." />
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
            return (
              <SourcesData data={item} />
            )
        }} />
    )
  return (
    <Container>
      <Content>
        {view}
      </Content>
    </Container>
  );
}
}