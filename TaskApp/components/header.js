import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const Header = () => {
  return (
	<View style={styles.container}>
      <View style={styles.headerContainer}>
	  	<View style={styles.horizontal}>
        <Text style={styles.name}>Hello, Devs</Text>
        <Text style={styles.task}>14 task today</Text>
		</View>
		<View style={styles.profileContainer}>
		<TouchableOpacity>
		<Image 
		source={require("../assets/person (2).png")}
		style={styles.profileImage}  />
		</TouchableOpacity>
		</View>
		
	 </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
	container: {
	 marginTop: 20,
	  },
	  headerContainer: {
		flexDirection: 'row',
		
	  },
	  name: {
		fontSize: 20,
		fontWeight: "bold",
	  },
	  task: {
		fontSize: 16,
	  },
	  profileImage: {
		width: 50, 
  		height: 50,
	  },
	  profileContainer: {
		flexDirection: 'row',
		marginLeft: 'auto',
		marginBottom: 15,
		width: 50, 
    	height: 50,
    	borderRadius: 50, 
    	overflow: "hidden", 
    	backgroundColor: 'white',
	  },
})