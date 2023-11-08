import React,{ useState,useEffect } from 'react'
import { View,Text,SafeAreaView,TextInput,Image,TouchableOpacity } from 'react-native'
import styles from './styles'
import { SEARCH,NOTES,BLACK_PLUS } from '../../constants'
import List from './List'
import { navigate } from '../../utilities'
import { useDispatch, useSelector } from 'react-redux'
import { setNoteData, updateNoteData } from '../../redux/slice/note'

export const Home = ()=>{

    
    const [search, setSearch] = useState('')
    const [data, setData] = useState('')
    const dispatch = useDispatch()
    const noteData = useSelector(state => state.note.noteData)
    console.log('noteData ==> ',noteData)

    useEffect(() => {
      setData(noteData)
    }, [noteData])
    

    const searchFun = (val)=>{
      setSearch(val)
      const filterData = noteData.filter((item) =>{
        return item.title?.toLowerCase().includes(val.toLowerCase()) 
      });
      if(val){
        setData(filterData)
      }else{
        setData(noteData)
      }
    }

    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
           <Text style={styles.headerText}>{NOTES}</Text>
           <View/>
        </View>
           <View style={styles.searchView}>
                <View style={styles.searchBarView}>
                
                <TextInput
                  placeholder="Search..."
                  style={styles.formInputText}
                  placeholderTextColor="#949499"
                  onChangeText={password => searchFun(password)}
                />
                <Image source={SEARCH} style={styles.searchLogo}/>
              </View>
           </View>

           {data?<View style={styles.itemContent}>
              <List
                list={data}
               />
               </View>:<View style={styles.noDataView}>
                <Text style={styles.noDataText}>No data</Text>
               </View>}
        <View style={styles.chatWidget}>
      <TouchableOpacity style={styles.chatButton} onPress={()=>navigate('AddItem',{data:''})}>
      <Image source={BLACK_PLUS} style={styles.searchLogo}/>
      </TouchableOpacity>
    </View>
        </SafeAreaView>
    )
}