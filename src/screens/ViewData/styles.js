import { StyleSheet } from "react-native";
import { COLOR,DIMENSIONS,FAMILY } from "../../theme";

export default StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:COLOR.DEFAULT
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
        backgroundColor:'#29242a33',
        borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
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
    TitleText: {
        fontSize: 30,
        color:  COLOR.DARK,
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
   ContentText: {
        fontSize: 16,
        color: COLOR.DARK,
        paddingLeft: 5,
        paddingRight: 20,
        fontFamily:FAMILY.REGULAR
    },
    topIconViews:{
        width:'32%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})