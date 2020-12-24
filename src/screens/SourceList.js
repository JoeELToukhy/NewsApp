import React, { Component } from 'react';
import { Alert, View, ActivityIndicator} from 'react-native';
import { Container, List, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {connect} from 'react-redux';
import SourceDetail from  '../component/sourceDetail'
import { getEverything } from '../service/news';



class SourceList extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
        isLoading: true,
        data: null
    }
  }

  componentDidMount(){
    getEverything(this.props.activeSource.url.replace("https://","").replace("http://","").replace("www.","")).then(data => {
        this.setState({
            isLoading: false,
            data: data
        });
        // console.log(this.state.data)
    }, error => {
        Alert.alert('error', 'something went wrong')
    }
    )
  }
//   handlePress = () => {
//     Linking.canOpenURL(this.props.activeArticle.url).then(supported => {
//       if (supported) {
//         Linking.openURL(this.props.activeArticle.url);
//       } else {
//         console.log("Don't know how to open URI: " + this.props.activeArticle.url);
//       }
//     });
//   };
  

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
              <SourceDetail data={item} />
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
function mapStateToProps(state){
  return{
    activeSource : state.activeSource
  };}
export default connect(mapStateToProps)(SourceList);