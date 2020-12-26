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
                <Image source={{uri: this.props.activeArticle.urlToImage != null ? this.props.activeArticle.urlToImage : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII='}} style={{height: 200, width: "100%", flex: 1}}/>
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