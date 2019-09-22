import React,{Component} from 'react';
import {View,Text,TouchableWithoutFeedback,ImageBackground,StyleSheet,Dimensions} from 'react-native';
import {Card,CardSection,Input, Button,Spinner} from './common';
import background from '../images/bg1.jpg';
import {emailChanged,changePassword} from '../actions';
import {connect} from 'react-redux';
var {height,width} = Dimensions.get('window');

class ForgotPass extends Component{
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onButtonPress(){
        const {email} = this.props;
        this.props.changePassword({email});
      }
    renderError(){
        if(this.props.error === 'Authentication Failed'){
            return(
                <View style={{backgroundColor: 'white'}}>
                    <Text style={{color:'#fff'}}>
                     
                    </Text>
                </View>
            );
        }
        else{
          <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size='large'/>;
        }
        return(
            <Button onPress = {this.onButtonPress.bind(this)} >
                Change
            </Button>
        );
    }

    render(){
        return(
            <ImageBackground source={background} style={styles.bgc}>
              <Card>
                <CardSection style={{marginTop:height/30}}>
                    <Input
                        lable = "Email"
                        placeholder = "email@gmail.com"
                        placeholderTextColor= "white"
                        onChangeText = {this.onEmailChange.bind(this)}
                        value ={this.props.email}
                      >
                    </Input>
                </CardSection> 
                
                <View style={{alignItems:'center'}}>{this.renderError()}</View>
                <CardSection style={{flexDirection:'column'}}>
                    <View style={styles.loginButtonCenter}>
                      <View style={styles.loginButton}>
                        {this.renderButton()}
                      </View>
                    </View>
                </CardSection>
              </Card>
           </ImageBackground>
        );
    };
}

const mapStateToProp = state => { 
    return{
        email:state.auth.email,
        error:state.auth.error,
        loading:state.auth.loading,
    };
  };
  
  export default connect(mapStateToProp, {
    emailChanged,changePassword
  })(ForgotPass);

const styles = StyleSheet.create({
    
    bgc:{
        flex:1,
        justifyContent:'center',
        fontFamily: "Feather"
    },
    loginButton:{
      color:'#fff',
      backgroundColor:'#24538F',
      height:height/13,
      width:width/5,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:width/25,
      marginBottom:width/25,
      fontFamily: "Feather"
    },
    loginButtonCenter:{
      alignItems:'center',
    
    },
    errorTextStyle:{
      color:'red',
      fontFamily: "Feather"
    }
  });

