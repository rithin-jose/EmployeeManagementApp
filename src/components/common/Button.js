import React from 'react';
import {Text,TouchableWithoutFeedback,StyleSheet,Dimensions} from 'react-native';
var {height,width} = Dimensions.get('window');

const Button= ({onPress,children}) => {
    return(
    <TouchableWithoutFeedback
        style={styles.buttonStyle}
        onPress={onPress}
    >
       <Text style={styles.textStyle}> {children}</Text>
    </TouchableWithoutFeedback>    
    );
}

const styles = StyleSheet.create({
    buttonStyle:{
    color:'#fff',
    backgroundColor:'#24538F',
    height:height/13,
    width:width/5,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:width/25,
    marginBottom:width/25,
    },
    textStyle:{
        alignSelf:'center',
        color:'#fff',
        fontSize:width/23,
        fontWeight: '600',
    },
});

export {Button};