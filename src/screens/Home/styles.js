import { StyleSheet } from "react-native";
import { COLOR, DIMENSIONS, FAMILY } from "../../theme";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOR.DARK
    },
    headerView:{
      width:DIMENSIONS.WIDTH,
      flexDirection:'row',
      alignItems:'center',
      justifyContent: 'space-between',
      height:50,
      paddingHorizontal:18,
      marginBottom:10
    },
    headerText:{
      fontFamily:FAMILY.SEMIBOLD,
      fontSize:23,
      color:COLOR.DEFAULT
    },
    noDataView:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    noDataText:{
      fontFamily:FAMILY.SEMIBOLD,
      fontSize:20,
      color:COLOR.SMOKE_WHITE
    },
    searchView:{
        width:DIMENSIONS.WIDTH,
        alignItems:'center',
        justifyContent: 'center',
        height:60,
        paddingHorizontal:18,
      },
      searchBarView:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        height:50,
        paddingHorizontal:18,
        backgroundColor:'#252327',
        borderRadius:50
      },
      formInputText: {
        flex: 1,
        fontSize: 15,
        color: '#ffffff',
        paddingLeft: 5,
        paddingRight: 20,
    },
    searchLogo:{
        width:20,
        height:20
    },
    topRatedMainView:{
        marginTop:10,
        width:DIMENSIONS.WIDTH/2,
        justifyContent: 'center',
        alignItems: 'center',
      },
      topRatedView:{
       width: '90%', // Adjust the width to control the number of columns
    aspectRatio: 1, // This makes each item square
    backgroundColor: '#dbe6ad',
    margin: 4,
    borderRadius:12,
   padding:10
      },
      topRatedContentView:{
        flexDirection:'row',
        alignItems: 'center',
      },
      topRatedDocName:{
        fontFamily:FAMILY.BOLD,
        fontSize:15
      },
      ListView:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      itemContent: {
        marginTop:15,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom:80
       },
       plusButtonView:{
        position:'relative',
        width:DIMENSIONS.WIDTH,
        paddingHorizontal:18,
        alignItems:'flex-end',
        justifyContent:'center',
        backgroundColor:'#fff',
   
       },
   
       chatWidget: {
        position: 'absolute',
        bottom: 40,
        right: 20,
        borderRadius: 50,
        width: 70,
        height: 70,
        // backgroundColor: COLOR.DARK,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:COLOR.DEFAULT
      },
      chatButton: {
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      chatButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
})