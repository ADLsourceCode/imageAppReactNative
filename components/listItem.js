import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { Text, Avatar, withStyles, List } from 'react-native-ui-kitten'


const listItem = ({ item }) => (
    <View style={{
        backgroundColor: 'white',
        marginBottom: 25
      }}>
    <Image
      source={{ uri: item.imageURI }}
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
      <Text category='s1' style={{
    color: 'black'
  }}>
        {item.postTitle}
      </Text>
      <TouchableOpacity
        onPress={()=>{}}>
        <Avatar
          source={{ uri: item.avatarURI }}
          size='small'
          style={ {
            marginRight: 16
          }}
        />
      </TouchableOpacity>
    </View>
    <View style={{
    padding: 10,
    borderWidth: 0.25,
    borderColor: 'white'
  }}>
      <Text category='p2'>{item.randomText}</Text>
    </View>
  </View>
  )



export default listItem


  