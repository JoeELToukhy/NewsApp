import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import HeadlinesTab from './HeadlinesTab';
import SourcesTab from './SourcesTab';

const TabScreen = () => {
    return (
      <Container>
          
        <Header hasTabs>
            <Left/>
          <Body>
            <Title style={{color:'white'}}>News App</Title>
          </Body>
          <Right />
        </Header>
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
