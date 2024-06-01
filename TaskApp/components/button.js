import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const Filter = () => {
  return (
	<View>
	<TouchableOpacity>
  	 <Image source={require("../assets/Filter.png")} />
  	</TouchableOpacity>
	</View>
  );
}

export default Filter
