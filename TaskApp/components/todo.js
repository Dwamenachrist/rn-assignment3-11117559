import { StyleSheet, Text, View, FlatList,Button } from 'react-native'
import React from 'react'
import Taskinfo from "./taskData";

const todo = () => {
  return (
    <View style={styles.todoHead}>
      <Text style={styles.heading}>Ongoing Tasks</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Taskinfo}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.taskbox}>
            <Text style={styles.taskName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default todo

const styles = StyleSheet.create({
  todoHead:{
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 20,
  },
  taskbox: {
    paddingBottom: 43,
    paddingTop: 30,
    borderColor: '#eddbc9',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#FBF9F7',
    margin: 3,
  },
  taskName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: 'bold',
  },
})