import React from'react';
import {Text,View,Modal,StyleSheet,Dimensions} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';


var {height,width} = Dimensions.get('window');
export const Confirm = ({children,onAccept,onDecline,visible}) => {
    const {containerStyle,textStyle,cardSectionStyle} = styles;
    return(
        <Modal
        animationType = "slide"
        onRequestClose = {() => {}}
        transparent
        visible={visible}
        >
            <View style={containerStyle}>
                <CardSection style = {cardSectionStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>
                <CardSection style={{ color:'#000',textAlign:'center'}}>
                    <View style={{flex:1,flexDirection:'row',color:'#000',textAlign:'center'}}>
                    <View style={styles.buttonStyle}>
                        <Button onPress = {onAccept}>Yes</Button>
                    </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row',color:'#000',textAlign:'center'}}>
                    <View style={styles.buttonStyle}>
                        <Button onPress = {onDecline} textStyle={{color:'#000'}}>No</Button>
                    </View>
                    </View>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    cardSectionStyle:{
        justifyContent:'center',
    },
    textStyle:{
        flex:1,
        fontSize:18,
        textAlign:'center',
        lineHeight: 40
    },
    containerStyle:{
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        position: "relative",
        flex:1,
        justifyContent:"center"
    },
    buttonStyle:{
        color:'#000',
        backgroundColor:'#d8dee6',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:width/25,
        marginBottom:width/25,
        fontFamily: "Feather"
    }
});