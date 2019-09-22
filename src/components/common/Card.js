import React from 'react';
import {View, StyleSheet,Dimensions} from 'react-native';

var {height,width} = Dimensions.get('window');


const Card =(props) => {
    return(
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderRadius:width/15,
        borderColor:'#ddd',
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOffset:{width:0, height: 2},
        shadowOpacity:0.2,
        shadowRadius: 2,
        elevation:1,
        backgroundColor:'#fff',
        marginLeft:width/15,
        marginRight:width/15,        
    }
});
export {Card};