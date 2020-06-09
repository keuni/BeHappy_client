import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Map from './Map';
import SearchName from './SearchName';
import SearchGeoContainer from '../../containers/SearchGeoContainer';

const stackNav = createStackNavigator(
  {
    Map: {
      screen: Map,
      navigationOptions: {
        headerShown: false,
      },
    },
    SearchName: {
      screen: SearchName,
      navigationOptions: {
        headerShown: false,
      },
    },
    SearchGeoContainer: {
      screen: SearchGeoContainer,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Map',
  }
);

const NavContainer = createAppContainer(stackNav);

function MapStack() {
  return <NavContainer />;
}

export default MapStack;