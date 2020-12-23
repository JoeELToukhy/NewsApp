import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import BusinessTab from './BusinessTab';
import SportsApp from './SportsTab';

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
          <Tab heading="Business">
            <BusinessTab />
          </Tab>
          <Tab heading="Sports">
            {/* <SportsApp /> */}
          </Tab>
        </Tabs>
      </Container>
    );
  }

export default TabScreen;
