import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Feed from '../screens/feed'
import Search from '../screens/search'
import Chat from '../screens/chat'
import Profile from '../screens/profile'
import { Icon } from 'react-native-ui-kitten'
import { FeedNavigator } from './stackNavigator'

const TabNavigator = createBottomTabNavigator({
    Feed: {
      screen: FeedNavigator,
      navigationOptions: {
        headerTitle: 'Feed',
        tabBarIcon: ({ focused }) => (
          <Icon
            name='home-outline'
            width={25}
            height={25}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='search-outline'
            width={25}
            height={25}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='message-circle-outline'
            width={25}
            height={25}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='person-outline'
            width={25}
            height={25}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
    }
  })


  export default createAppContainer(TabNavigator)