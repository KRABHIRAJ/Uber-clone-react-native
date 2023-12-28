import { Image, Platform, SafeAreaView,  StatusBar,  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={{
        padding: 15,
      }}>
        <Image 
            style={{
                height: 100,
                width: 100,
                resizeMode: 'contain'
            }}
            source={{
                uri : 'https://links.papareact.com/gzs'
            }}
        />
        
      </View>
      <NavOptions />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    homeContainer: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
        backgroundColor: '#fff',
        height: '100%'
    }
})