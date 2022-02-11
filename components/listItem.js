import React, { Component } from 'react'
import { Image, View, TouchableOpacity,StyleSheet } from 'react-native'
import { Text, Avatar, withStyles, List, } from 'react-native-ui-kitten'

import { Icon } from 'react-native-ui-kitten'

const listItem = ({ item }) => (
    <View style={style.container}>
    <Image
      source={{ uri: item.largeImageURL }}
      style={style.image}
    />
    <View style={style.bottomContainer}>
   <View style={style.innerContainer}>
   <Avatar
          source={{ uri: item.userImageURL }}
          size='small'
          style={style.avatar}
        />
      <Text category='s1' style={style.title}>
        {item.user}
      </Text>


       
       
    </View>
<View style={style.lowerContainer}>
    <Icon
            name='heart-outline'
            width={25}
            height={25}
            fill='#939393'
          />
          <Text style={style.stats}>{item.likes}</Text>
          
          <Icon
            name='download-outline'
            width={25}
            height={25}
            fill='#939393'
          />
          <Text>{item.downloads}</Text>
          </View>
    </View>
        <View  style={style.tagContainer}>
        <Text>Tags: {item.tags.split(",").map((e) => {
         return (   <Text>{e}</Text>)
        })}</Text>
        </View>
    
  </View>
  )


  const style = StyleSheet.create({
    image: {
      width: '100%',
      height: 300
    },
    container: {
      backgroundColor: 'white',
      marginBottom: 25
    },
    bottomContainer:{
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    innerContainer:{
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    avatar: {
      marginRight: 16
    },
    tltle:{
      color: 'black'
    },
    lowerContainer:{
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    stats:{
      marginRight:10
    },
    tagContainer:{
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }
})

export default listItem


  