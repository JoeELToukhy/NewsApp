import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import HeadlinesTab from './HeadlinesTab';
import SourcesTab from './SourcesTab';

const TabScreen = () => {
    return (
      <Container>
        <Tabs>
          <Tab heading="Headlines">
            <HeadlinesTab />
          </Tab>
          <Tab heading="Sources">
            <SourcesTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }

export default TabScreen;
