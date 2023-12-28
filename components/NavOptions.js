import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
      id: '123',
      title: 'Get a ride',
      image: 'https://links.papareact.com/3pn',
      screen: 'MapScreen',
    },
    {
      id: '456',
      title: 'Order food',
      image: 'https://links.papareact.com/28w',
      screen: 'EatScreen',
    },
  ];

const NavOptions = () => {
    const navigation = useNavigation();
  return (
    <FlatList  
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style={styles.touchableOpacity
             }>
                <View>
                    <Image
                        style={{
                            height:120,
                            width: 120,
                            resizeMode:'contain'
                        }}
                        source={{ uri : item.image }}
                     />
                    <Text style={styles.textContainer}>{item.title}</Text>
                    <Icon 
                            style={styles.icon}
                            type='antdesign'
                            name='arrowright'
                            color='white'
                    />
                     </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({
    touchableOpacity : {
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#eee',
        height: 240,
        marginHorizontal: 15,
        borderRadius: 10
    },
    textContainer: {
        fontSize: 18,
        fontWeight: '700'
    },
    icon:{
        backgroundColor: 'black',
        borderRadius: 99,
        width:40,
        paddingVertical: 8,
        marginTop: 10
    }
})