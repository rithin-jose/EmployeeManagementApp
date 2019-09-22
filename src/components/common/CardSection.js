import React from 'react';
import {View, StyleSheet,Dimensions} from 'react-native';

var {height,width} = Dimensions.get('window');

const CardSection =(props) => {
    return(
       <View style={[styles.container,props.style]}>
            {props.children}
       </View>
    );  
}

const styles = StyleSheet.create({
    container:{
        borderRadius:width/15,
        padding:width/30,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        position:'relative',
        
    }
});
export {CardSection};