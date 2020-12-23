import React, {Component} from 'react';
import { ListItem, Left, Right, Thumbnail, Body, View, Text, Button } from 'native-base';
// import TimeAgo from './time';

export default class SourcesData extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress = () => {
      const {url, title} = this.data;
      this.props.onPress({url, title});
    }

    render() {
        return(
          <ListItem>
            <Left>
              <Text numberOfLines={2}>{this.data.name}</Text>
            </Left>
            <Body>
            <Right style={{alignSelf: 'flex-end'}}>
              <Button transparent onPress={this.handlePress}>
                <Text>View</Text>
              </Button>
            </Right>
            </Body>
          </ListItem>

        );
    }
}