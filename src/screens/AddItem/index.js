import React,{ useEffect, useState } from 'react'
import { View,Text,TextInput, SafeAreaView, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import styles from './styles'
import { CHECK,BACK } from '../../constants'
import { back, navigate } from '../../utilities'
import { useDispatch,useSelector } from 'react-redux'
import { setNoteData, updateNoteData } from '../../redux/slice/note'
import { CustomTextInput } from '../../components/customTextInput'

export const AddItem = ({ route })=>{
  const { data } = route.params
  const dispatch = useDispatch()
  const noteData = useSelector(state => state.note.noteData)
    
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isShowErr,setIsShowErr] = useState('')

  useEffect(()=>{
    if(data){
      setTitle(data.title)
      setContent(data.content)
    }
  },[])

  const saveData = (val)=>{
    if(title && content){
      let data = {
        id:noteData.length+1,
        title,
        content
    }
    dispatch(setNoteData(data))
    navigate('Home')
    }else{
      setIsShowErr(true)
      setTimeout(() => {
        setIsShowErr(false)
      }, 2000);
    }
    
  }

  const updateData = ()=>{
    const removeData = noteData.filter(item=>item.id !== data.id)
    let updateData = {
        id:data.id,
        title,
        content
    }
    removeData.push(updateData)
    dispatch(updateNoteData(removeData))
    navigate('Home')
  }

    return(
        <SafeAreaView style={styles.container}>
          <View style={styles.homeFirstView}>
          <View style={styles.locView}>

          <TouchableOpacity style={styles.imageView} onPress={back}>
                <Image source={BACK} style={styles.icon}/>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.imageView} onPress={()=> data ?updateData():saveData()}>
                <Image source={CHECK} style={styles.icon}/>
              </TouchableOpacity>
          </View>
          </View>
          
        <View style={styles.headerView}>
        <View style={styles.titleBarView}>
            <TextInput
                  placeholder="Title..."
                  style={styles.formInputTitle}
                  placeholderTextColor="#949499"
                  value={title}
                  onChangeText={title => setTitle(title)}
                  multiline
                />
                </View>
        </View>
           <View style={styles.contentView}>
           <View style={styles.titleBarView}>

           <TextInput
                  placeholder="Write something......."
                  style={styles.formInputContent}
                  placeholderTextColor="#949499"
                  value={content}
                  onChangeText={content => setContent(content)}
                  multiline
                />
           </View>
           </View>
             
               {isShowErr? <View style={styles.errView}>
                  <Text style={styles.errorText}>All fields should be filled with your dreams</Text>
                </View>:null}

                {/* <View style={styles.contentView}>
           <View style={styles.titleBarView}>

           <CustomTextInput />
           </View>
           </View> */}
               
        </SafeAreaView>
    )
}