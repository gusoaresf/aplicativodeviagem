import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>RM 97850 - Gustavo Soares</Text>
      <Text>RM 98774 - Gabriel Previ de Oliveira</Text>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})