import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { THEME } from '../theme'
import { TextRoboto } from '../components/ui/TextRoboto'
import { ButtonCustom } from '../components/ui/ButtonCustom'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'


export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [modal, setModal] = useState(false)

  const saveHandler = title => {
    onSave(todo.id, title)
    setModal(false)
  }

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <AppCard style={styles.card}>
        <TextRoboto style={styles.title}>{todo.title}</TextRoboto>
        <ButtonCustom onPress={() => setModal(true)} >
          <AntDesign name='edit' size={THEME.ICON_SIZE} />
        </ButtonCustom>
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <ButtonCustom
             onPress={goBack} 
             color={THEME.GREY_COLOR}
          >
            <MaterialIcons name='arrow-back' size={THEME.ICON_SIZE} />
          </ButtonCustom>
        </View>
        <View style={styles.button}>
          <ButtonCustom
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}
          >
            <MaterialIcons name='delete' size={THEME.ICON_SIZE} />
          </ButtonCustom>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    marginBottom: 20,
    padding: 15
  },
  button: {
    width: '40%'
  },
  title: {
    fontSize: 20
  }
})
