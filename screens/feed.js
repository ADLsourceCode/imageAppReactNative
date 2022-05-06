import React, { Component } from 'react'
import { Image, View, TouchableOpacity,ActivityIndicator,RefreshControl, } from 'react-native'
import { FlatList, } from 'react-navigation';
import { Text, Avatar, withStyles, List } from 'react-native-ui-kitten'
import ListItem from '../components/listItem.js';
import NetworkUtils  from '../misc/networkUtils.js';




  class Feed extends Component {
    state = { DATA: null, isRefreshing: false,page:1,perPage:5, loadingMore: false,isConnected:true }
    
    componentDidMount() {

      this.fetchPosts()

    }



    fetchPosts = async () => {
      try {
        const { page } = this.state;
        var URL  = `https://pixabay.com/api/?key=25635193-22a1499fce771e0aa36ed3765&q=yellow+flowers&image_type=photo&pretty=true&page=${page}&per_page=5`;
        let response = await fetch(URL);
        let responseJson = await response.json();
       // console.log(responseJson)
       
        this.setState({ DATA:
          page === 1
              ? responseJson["hits"]
              : [...this.state.DATA, ...responseJson["hits"]]
          
        
        , isRefreshing: false })
      } catch (e) {
        console.error(e)
        
      }
    }

    onRefresh = () => {
      this.setState({ isRefreshing: true })
      this.fetchPosts()
    }

    _loadMore= () => {
      this.setState(
        (prevState, nextProps) => ({
          page: prevState.page + 1,
          loadingMore: true
        }),
        () => {
          this.fetchPosts();
        }
      );
    }

    

   
    render () {


      if (this.state.DATA != null) {
      return (
        
        <FlatList
        style={{
            flex: 1
          }}
        renderItem={ListItem}
        // key
        data={this.state.DATA}
        keyExtractor={this.state.DATA.id}
        refreshControl={<RefreshControl refreshing={this.state.refreshing}
         onRefresh={this.onRefresh} />}
         onEndReached={this._loadMore}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
      />
      )
    } else{
    return (
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    )
    }
 
    

    }

  }

export default Feed

