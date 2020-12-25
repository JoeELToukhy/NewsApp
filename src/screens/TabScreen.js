import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import HeadlinesTab from './HeadlinesTab';
import SourcesTab from './SourcesTab';
import HistoryTab from './HistoryTab';


class TabScreen extends Component {
  render(){
    return (
      <Container>
        <Tabs>
          <Tab heading="Headlines">
            <HeadlinesTab />
          </Tab>
          <Tab heading="Sources">
            <SourcesTab />
          </Tab>
          <Tab heading="History">
            <HistoryTab/>
          </Tab>
        </Tabs>
      </Container>
    )};
  }

export default TabScreen;
