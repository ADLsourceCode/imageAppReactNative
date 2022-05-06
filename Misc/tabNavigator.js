import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Feed from '../screens/feed.js'
import Search from '../screens/search.js'
import Chat from '../screens/chat.js'
import Profile from '../screens/profile.js'
import { Icon } from 'react-native-ui-kitten'
import { FeedNavigator } from './stackNavigator.js'

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