import React, {Component} from 'react';
import { ListItem, Left, Right, Thumbnail, Body, View, Text, Button } from 'native-base';
// import TimeAgo from './time';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { sourceSelected } from '../actions/index'

class SourcesData extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress = () => {
      Actions.sourceList();
      this.props.sourceSelected(this.data);
      // console.log(this.data)
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

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    sourceSelected: sourceSelected
  }, dispatch)
}
export default connect(null, matchDispatchToProps)(SourcesData);