import React, {Component} from 'react';
import { ListItem, Right, Body, View, Text } from 'native-base';

export default class HistoryData extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }

    render() {
        return(
            <ListItem thumbnail>

              <Body>
                <Text numberOfLines={1}>{this.data.title}</Text>
                <Text note numberOfLines={1}>{this.data.author}</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>{this.data.source.name}</Text>
                </View>
              </Body>
              <Right>
                  <Text>{this.data.time}</Text>
              </Right>
            </ListItem>
        );
    }
}
