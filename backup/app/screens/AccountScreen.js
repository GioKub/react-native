import React from 'react'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import Icon from '../components/Icon'
import ListItemSeperator from '../components/ListItemSeperator'
import {StyleSheet, View, FlatList} from 'react-native'
import colors from '../config/colors'

const menuItems = [{
    title: "My listings",
    icon:{
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
    },
},
{
    title: "My Messages",
    icon:{
        name: "email",
        backgroundColor: colors.secondary,
    },
}
]


function AccountScreen(props){
    return(
        <Screen style={styles.screen}>
            <View style={styles.container}>
            <ListItem
                title="Mosh Hamedani"
                subTitle="programmingwithmosh@gmail.com"
                image={require('../assets/mosh.jpg')}>
                </ListItem>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem=>menuItem.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({item})=>
                    <ListItem
                    title={item.title}
                    ItemComponent={
                        <Icon name={item.icon.name}
                        backgroundColor={item.icon.backgroundColor}/>
                    }
                    />
                }
                ></FlatList>
            </View>
            <ListItem title="Logout" ItemComponent={
                <Icon name="logout" backgroundColor='#ffe66d'/>
            }/>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.light
    },
    container:{
        marginVertical: 20,
        backgroundColor: colors.black
    }
})

export default AccountScreen