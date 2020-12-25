import React, { Component } from 'react';
import { Image, Linking  } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import moment from 'moment'
import {connect} from 'react-redux';

class ArticleDetail extends Component {
  handlePress = () => {
    Linking.canOpenURL(this.props.activeArticle.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.activeArticle.url);
      } else {
        console.log("Don't know how to open URI: " + this.props.activeArticle.url);
      }
    });
  };
  

  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>{this.props.activeArticle.title}</Text>
                  <Text note>{this.props.activeArticle.author}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: this.props.activeArticle.urlToImage}} style={{height: 200, width: "100%", flex: 1}}/>
                <Text>
                  {this.props.activeArticle.content}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                  <Text note>{moment(this.props.activeArticle.publishedAt).format('llll')}</Text>
              </Left>
              <Right>
                <Button transparent onPress={this.handlePress}>
                  <Text>View</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
function mapStateToProps(state){
  return{
    activeArticle : state.activeArticle
  };}
export default connect(mapStateToProps)(ArticleDetail);