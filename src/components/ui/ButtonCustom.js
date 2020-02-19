import React from 'react'
import { View, StyleSheet, TouchableOpacity, Vibration } from 'react-native'
import { TextRobotoBold } from './TextRobotoBold'
import { THEME } from '../../theme'

export const ButtonCustom = ({ children, onPress, color = THEME.MAIN_COLOR }) => {

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={{...styles.button, backgroundColor: color}} >
        <TextRobotoBold style={styles.text}>{children}</TextRobotoBold>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff'
  }
})