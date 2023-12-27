import { Platform, SafeAreaView,  StatusBar,  StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <Text>HomeScreen</Text>
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