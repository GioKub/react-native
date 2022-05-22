import React, {useState} from 'react'
import {FlatList, StyleSheet} from 'react-native'

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeperator from '../components/ListItemSeperator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require("../assets/mosh.jpg")
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require("../assets/mosh.jpg")
    }
]

function messagesScreen(props){
    const [messages, setMessages] = useState(initialMessages)

    const handleDelete = message =>{
        setMessages(messages.filter(m=>m.id!==message.id))
    }

    return(
        <Screen>
        <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => 
        <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={()=> console.log("Message selcted", item)}
            renderRightActions={()=>
            <ListItemDeleteAction onPress={()=>handleDelete(item)}/>}
        />}
        ItemSeparatorComponent={ListItemSeperator}
        renderRightActions
        />
        </Screen>
    )
}

const styles = StyleSheet.create({

})

export default messagesScreen