import { StyleSheet } from "react-native";
import { COLOR, DIMENSIONS, FAMILY } from "../../theme";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOR.DEFAULT
    },
    titleBarView:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        borderRadius:50
    },
    headerView:{
        marginTop:50,
       width:DIMENSIONS.WIDTH,
       paddingHorizontal:18,
       alignItems: 'center',
       justifyContent: 'center',
    },
    formInputTitle: {
        flex: 1,
        fontSize: 30,
        color: '#b4b4b4',
        paddingLeft: 5,
        paddingRight: 20,
        fontFamily:FAMILY.BOLD
    },
    contentView:{
        marginTop:25,
        width:DIMENSIONS.WIDTH,
        paddingHorizontal:18,
        alignItems: 'center',
        justifyContent: 'center',
     },
    formInputContent: {
        flex: 1,
        fontSize: 16,
        color: '#b4b4b4',
        paddingLeft: 5,
        paddingRight: 20,
        fontFamily:FAMILY.REGULAR
    },
    homeFirstView:{
        // position:'absolute',
        flexDirection: 'row',
        justifyContent:'center',
        width:DIMENSIONS.WIDTH,
      },
      locView:{
        width:'95%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        height:60
      },
      icon:{
       width:25,
       height:25,
      },
      imageView:{
        width:50,
        height:50,
        backgroundColor:'#29242a',
        borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      errorText:{
        fontFamily:FAMILY.MEDIUM,
        color:COLOR.RED,
        fontSize:15
      },
      errView:{
        position:'absolute',
        width:DIMENSIONS.WIDTH,
        paddingHorizontal:20,
        alignItems:'center',
        justifyContent: 'center',
        bottom:80
      }
})