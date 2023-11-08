import React from 'react'
import { View,Text,TouchableOpacity,Image, SafeAreaView } from 'react-native'
import styles from './styles'
import { BACK,DELETE,UPDATE } from '../../constants'
import { back, navigate } from '../../utilities'
import { useDispatch,useSelector } from 'react-redux'
import { updateNoteData } from '../../redux/slice/note'

export const ViewData = ({ route })=>{
    const { data } = route.params
    const dispatch = useDispatch()
    const noteData = useSelector(state => state.note.noteData)

    const removeData = (id)=>{
      const removeData = noteData.filter(data=>data.id !== id)
      dispatch(updateNoteData(removeData))
      navigate('Home')
    }

    const updateData = (data)=>{
        navigate('AddItem',{data})
      }

    return(
        <SafeAreaView style={styles.container}>
             <View style={styles.homeFirstView}>
          <View style={styles.locView}>

          <TouchableOpacity style={styles.imageView} onPress={back}>
                <Image source={BACK} style={styles.icon}/>
              </TouchableOpacity>
             <View style={styles.topIconViews}>
             <TouchableOpacity  style={styles.imageView} onPress={()=>updateData(data)}>
                <Image source={UPDATE} style={styles.icon}/>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.imageView} onPress={()=>removeData(data.id)}>
                <Image source={DELETE} style={styles.icon}/>
              </TouchableOpacity>
             </View>
          </View>
          </View>

          <View style={styles.headerView}>
        <View style={styles.titleBarView}>
                <Text style={styles.TitleText}>{data.title}</Text>
                </View>
        </View>
           <View style={styles.contentView}>
           <View style={styles.titleBarView}>
                <Text style={styles.ContentText}>{data.content}</Text>
           </View>
           </View>

        </SafeAreaView>
    )
}