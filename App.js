import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'
import {ScrollView} from 'react-native-gesture-handler'

const colors = {
  themeColor: "#00ced1",
  pale:"#afeeee",
  background:"#7fffd4",
  greyish: "a4aa4a4",
  tint: "2b49c3",
  white: "#fff"
}

const tasks = [
  {
  task:"Insanity Workout",
  icon:"hiking",
  theme:"#008b8b",
  stamp: "Today . 7am"
},
{
  task:"Meting",
  icon:"account",
  theme:"#008b8b",
  stamp: "Today . 10am"
},
{
  task:"Groceries",
  icon:"cart",
  theme:"#008b8b",
  stamp: "Today . 6pm"
},
{
  task:"Lifting",
  icon:"weight",
  theme:"#008b8b",
  stamp: "Today . 7pm"
},
]

const Task = ({task,icon, theme, stamp}) => {
      return (
        <View style={{
          backgroundColor:colors.pale,
          flexDirection: "row",
          marginHorizontaol: 16,
          marginVertical: 4,
          borderRadius: 20,
          paddingVertical: 20,
          paddingHorizontal: 24,
          alignItems:"center",
          justifyContent: "space-between"
        }}>
          <View style={{flexDirection:"row", alignItems: "center" }}>
          <MaterialCommunityIcons name={icon} size={30} style={{color: theme, marginRight: 5 }}/>
          <View>
            <Text style={{fontSize:16}}>{task}</Text>
            <Text style={{ color: colors.greyish }}>{stamp}</Text>
          </View>
          </View>

          <View style={{flexDirection:"row"}}>
          <MaterialCommunityIcons name="pencil" size={30} style={{color: colors.black}}/>
          <MaterialCommunityIcons name="trash-can" size={30} style={{color: colors.black}}/>
          </View>
        </View>
      )
}

export default function App() {
  return (
    <View style={{flex: 1,backgroundColor: colors.themeColor}}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.themeColor} />
      <View style={{ backgroundColor: colors.themeColor}}> 
      <View style={{padding:16, flexDirection:"row", justifyContent: "space-between"}}>
        <MaterialCommunityIcons name="text" size={30} style={{color:colors.white}}/>
          <View style={{flexDirection: "row"}}>
          <MaterialCommunityIcons name="bell-outline" size={30} style={{color:colors.white}}/>
          <AntDesign name="user" size={30} style={{color:colors.white}}/>
          </View>
      </View>
        <View style={{padding:16}}>
          <Text style={{ color: colors.white, fontSize: 30 }}>{"Hello, \nMarcus"}</Text>
          <View style = {{
            paddingHorizontal:16,
            paddingVertical:6, 
            flexDirection:"row",
            justifyContent: "space-between",
            backgroundColor: colors.tint, 
            borderRadius: 20,
            marginVertical: 20,
            alignItems:"center"
          }}>
          <MaterialCommunityIcons name="magnify" size={30} style={{color:colors.white}}/>
          <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons name="microphone" size={30} style={{color:colors.white}}/>
          <MaterialCommunityIcons name="tune" size={30} style={{color:colors.white}}/>
          </View>
          </View>
        </View>
      </View>
        <View style={{ padding:20 , flexDirection: "row", backgroundColor: colors.background, justifyContent: "space-between", alignItems: "center,", borderTopLeftRadius:20 }}>
          <Text style={{ fontSize: 24 }}>Tasks</Text>
          <MaterialCommunityIcons name="plus" size={30} style={{color:colors.themeColor, backgroundColor:colors.white, borderRadius: 20, marginHorizontal: 8}}/>
        </View>
          <ScrollView style={{backgroundColor: colors.background}}>
              {tasks.map(task => (<Task 
              task={task.task} icon={task.icon} theme={task.theme} stamp={task.stamp}
                />))}
          </ScrollView>
    </View>
  );
}
