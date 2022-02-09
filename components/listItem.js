import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { Text, Avatar, withStyles, List } from 'react-native-ui-kitten'

import { Icon } from 'react-native-ui-kitten'

const listItem = ({ item }) => (
    <View style={{
        backgroundColor: 'white',
        marginBottom: 25
      }}>
    <Image
      source={{ uri: item.largeImageURL }}
      style={{
        width: '100%',
        height: 300
      }}
    />
    <View style={{
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }}>
   <View style={{
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }}>
   <Avatar
          source={{ uri: item.userImageURL }}
          size='small'
          style={ {
            marginRight: 16
          }}
        />
      <Text category='s1' style={{
    color: 'black'
  }}>
        {item.user}
      </Text>


       
       
    </View>
<View style={{
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }}>
    <Icon
            name='heart-outline'
            width={25}
            height={25}
            fill='#939393'
          />
          <Text style={{
            marginRight:10
          }}>{item.likes}</Text>
          
          <Icon
            name='download-outline'
            width={25}
            height={25}
            fill='#939393'
          />
          <Text>{item.downloads}</Text>
          </View>
    </View>
        <View  style={{
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }}>
        <Text>Tags: {item.tags.split(",").map((e) => {
         return (   <Text>{e}</Text>)
        })}</Text>
        </View>
    
  </View>
  )



export default listItem


  